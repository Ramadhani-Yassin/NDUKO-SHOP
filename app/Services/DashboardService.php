<?php

namespace App\Services;

use App\Enums\Expense\ExpenseFieldsEnum;
use App\Enums\Order\OrderFieldsEnum;
use App\Helpers\BaseHelper;
use App\Models\Expense;
use App\Models\Order;
use Carbon\Carbon;

class DashboardService
{
    public function getData(?string $date = null): array
    {
        // Use current date if no date provided
        if ($date) {
            $date = Carbon::parse($date);
        } else {
            $date = Carbon::now();
        }

        // Get total order count and total sales for the current month
        $selectedMonthOrders = Order::query()
            ->whereMonth('created_at', $date->month)
            ->whereYear('created_at', $date->year)
            ->get();
        $selectedMonthTotalOrders = $selectedMonthOrders->count();
        $selectedMonthTotalSales = $selectedMonthOrders->sum('paid'); // Sum only paid amounts (cash & Lipa Namba instantly; loan after payment)

        $lastMonthOrders = Order::query()
            ->whereMonth('created_at', $date->copy()->subMonth()->month)
            ->whereYear('created_at', $date->copy()->subMonth()->year)
            ->get();
        $lastMonthTotalOrders = $lastMonthOrders->count();
        $lastMonthTotalSales = $lastMonthOrders->sum('paid');

        // Get total expenses for the current month
        $selectedMonthTotalExpenses = Expense::query()
            ->whereMonth('expense_date', $date->month)
            ->whereYear('expense_date', $date->year)
            ->sum('amount');
        
        $lastMonthTotalExpenses = Expense::query()
            ->whereMonth('expense_date', $date->copy()->subMonth()->month)
            ->whereYear('expense_date', $date->copy()->subMonth()->year)
            ->sum('amount');

        // Profit should follow payments: sum orders' stored profit (which is based on paid)
        $selectedMonthGrossProfit = (double) $selectedMonthOrders->sum('profit');
        $lastMonthGrossProfit = (double) $lastMonthOrders->sum('profit');

        // Calculate net profit (gross profit minus expenses)
        $selectedMonthTotalProfit = $selectedMonthGrossProfit - $selectedMonthTotalExpenses;
        $lastMonthTotalProfit = $lastMonthGrossProfit - $lastMonthTotalExpenses;

        // Calculate percentage changes
        $orderPercentageChange = ($lastMonthTotalOrders != 0) ? (($selectedMonthTotalOrders - $lastMonthTotalOrders) / $lastMonthTotalOrders) * 100 : 0;
        $salesPercentageChange = ($lastMonthTotalSales != 0) ? (($selectedMonthTotalSales - $lastMonthTotalSales) / $lastMonthTotalSales) * 100 : 0;
        $expensePercentageChange = ($lastMonthTotalExpenses != 0) ? (($selectedMonthTotalExpenses - $lastMonthTotalExpenses) / $lastMonthTotalExpenses) * 100 : 0;
        $profitPercentageChange = ($lastMonthTotalProfit != 0) ? (($selectedMonthTotalProfit - $lastMonthTotalProfit) / $lastMonthTotalProfit) * 100 : 0;

        return [
            "total_orders"      => [
                "selected"          => $selectedMonthTotalOrders,
                "percentage_change" => abs(BaseHelper::numberFormat($orderPercentageChange)),
                "stateArray"        => $orderPercentageChange < 0 ? "down" : "up"
            ],
            "total_sales"       => [
                "selected"          => (double) $selectedMonthTotalSales,
                "percentage_change" => abs(BaseHelper::numberFormat($salesPercentageChange)),
                "stateArray"        => $salesPercentageChange < 0 ? "down" : "up",
                "currency"          => "TZS"
            ],
            "total_profit"      => [
                "selected"          => (double) $selectedMonthTotalProfit,
                "percentage_change" => abs(BaseHelper::numberFormat($profitPercentageChange)),
                "stateArray"        => $profitPercentageChange < 0 ? "down" : "up"
            ],
            "total_expense"     => [
                "selected"          => (double) $selectedMonthTotalExpenses,
                "percentage_change" => abs(BaseHelper::numberFormat($expensePercentageChange)),
                "stateArray"        => $expensePercentageChange < 0 ? "down" : "up"
            ],
            "profit_line_chart" => $this->prepareProfitLineChart(),
            "orders_bar_chart"  => $this->prepareOrderBarChart(),
        ];
    }

    private function prepareProfitLineChart(): array
    {
        // Get profit data for the last 7 months based on orders' stored profit minus expenses
        $currentYearProfit = [];
        $lastYearProfit = [];
        
        for ($i = 6; $i >= 0; $i--) {
            $carbon = Carbon::now()->subMonths($i);
            
            // Current year profit
            $currentYearOrders = Order::whereMonth('created_at', $carbon->month)
                ->whereYear('created_at', $carbon->year)
                ->get();
            $currentYearExpenses = Expense::whereMonth('expense_date', $carbon->month)
                ->whereYear('expense_date', $carbon->year)
                ->sum('amount');
            $currentYearProfit[] = (double) $currentYearOrders->sum('profit') - (double) $currentYearExpenses;
            
            // Last year profit
            $lastYearOrders = Order::whereMonth('created_at', $carbon->month)
                ->whereYear('created_at', $carbon->copy()->subYear()->year)
                ->get();
            $lastYearExpenses = Expense::whereMonth('expense_date', $carbon->month)
                ->whereYear('expense_date', $carbon->copy()->subYear()->year)
                ->sum('amount');
            $lastYearProfit[] = (double) $lastYearOrders->sum('profit') - (double) $lastYearExpenses;
        }

        // Loop to get the last 7 months
        $months = [];
        $currentYearProfitValues = [];
        $lastYearProfitValues = [];
        for ($i = 6; $i >= 0; $i--) {
            $carbon = Carbon::now()->subMonths($i);
            $months[] = $carbon->format('F');
            $currentYearProfitValues[] = (double) ($currentYearProfit[6 - $i] ?? 0);
            $lastYearProfitValues[] = (double) ($lastYearProfit[6 - $i] ?? 0);
        }

        return [
            "months"       => $months,
            "current_year" => $currentYearProfitValues,
            "last_year"    => $lastYearProfitValues,
        ];
    }

    private function prepareOrderBarChart(): array
    {
        $currentYearOrders = Order::selectRaw('MONTH(created_at) as month, COUNT(*) as total_orders')
            ->whereYear('created_at', Carbon::now()->year)
            ->where('created_at', '>=', Carbon::now()->subMonths(7))
            ->groupBy('month')
            ->pluck('total_orders', 'month');

        $lastYearOrders = Order::selectRaw('MONTH(created_at) as month, COUNT(*) as total_orders')
            ->whereYear('created_at', Carbon::now()->subYear()->year)
            ->where('created_at', '>=', Carbon::now()->subYear()->subMonths(7))
            ->groupBy('month')
            ->pluck('total_orders', 'month');

        // Loop to get the last 7 months
        $months = [];
        $currentYearOrdersValues = [];
        $lastYearOrdersValues = [];
        for ($i = 6; $i >= 0; $i--) {
            $carbon = Carbon::now()->subMonths($i);
            $months[] = $carbon->format('F');
            $currentYearOrdersValues[] = (double) ($currentYearOrders[$carbon->month] ?? 0);
            $lastYearOrdersValues[] = (double) ($lastYearOrders[$carbon->month] ?? 0);
        }

        return [
            "months"       => $months,
            "current_year" => $currentYearOrdersValues,
            "last_year"    => $lastYearOrdersValues,
        ];
    }
}

<?php

namespace App\Http\Controllers;

use App\Enums\Core\FilterFieldTypeEnum;
use App\Enums\Core\SortOrderEnum;
use App\Enums\Expense\ExpenseFiltersEnum;
use App\Enums\Expense\ExpenseSortFieldsEnum;
use App\Exceptions\ExpenseNotFoundException;
use App\Helpers\BaseHelper;
use App\Http\Requests\Expense\ExpenseCreateRequest;
use App\Http\Requests\Expense\ExpenseIndexRequest;
use App\Http\Requests\Expense\ExpenseUpdateRequest;
use App\Services\ExpenseService;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

class ExpenseController extends Controller
{
    public function __construct(private readonly ExpenseService $service)
    {
    }

    public function index(ExpenseIndexRequest $request): Response|StreamedResponse
    {
        if ($request->filled('export')) {
            $page = $this->service->getAll([
                ...$request->validated(),
                'per_page' => 100000,
            ]);
            $rows = $page->items();
            $filename = 'expenses_' . now()->format('Ymd_His') . '.csv';
            $headers = [
                'Content-Type' => 'text/csv',
                'Content-Disposition' => "attachment; filename=\"{$filename}\"",
            ];
            return response()->stream(function () use ($rows) {
                $out = fopen('php://output', 'w');
                fputcsv($out, ['ID', 'Name', 'Amount', 'Expense Date', 'Description']);
                foreach ($rows as $e) {
                    fputcsv($out, [$e->id, $e->name, $e->amount, $e->expense_date, $e->description]);
                }
                fclose($out);
            }, 200, $headers);
        }

        return Inertia::render(
            component: 'Expense/Index',
            props: [
                'expenses' => $this->service->getAll($request->validated()),
                'filters'  => [
                    ExpenseFiltersEnum::NAME->value         => [
                        'label'       => ExpenseFiltersEnum::NAME->label(),
                        'placeholder' => 'Enter name.',
                        'type'        => FilterFieldTypeEnum::STRING->value,
                        'value'       => $request->validated()[ExpenseFiltersEnum::NAME->value] ?? "",
                    ],
                    ExpenseFiltersEnum::AMOUNT->value       => [
                        'label'       => ExpenseFiltersEnum::AMOUNT->label(),
                        'placeholder' => 'Enter amount.',
                        'type'        => FilterFieldTypeEnum::NUMBER_RANGE->value,
                        'value'       => $request->validated()[ExpenseFiltersEnum::AMOUNT->value] ?? "",
                    ],
                    ExpenseFiltersEnum::EXPENSE_DATE->value => [
                        'label'       => ExpenseFiltersEnum::EXPENSE_DATE->label(),
                        'placeholder' => 'Enter expense date.',
                        'type'        => FilterFieldTypeEnum::DATE_RANGE->value,
                        'value'       => $request->validated()[ExpenseFiltersEnum::EXPENSE_DATE->value] ?? "",
                    ],
                    "sort_by"                               => [
                        'label'       => 'Sort By',
                        'placeholder' => 'Select a sort field',
                        'type'        => FilterFieldTypeEnum::SELECT_STATIC->value,
                        'value'       => $request->validated()['sort_by'] ?? "",
                        'options'     => BaseHelper::convertKeyValueToLabelValueArray(ExpenseSortFieldsEnum::choices()),
                    ],
                    "sort_order"                            => [
                        'label'       => 'Sort order',
                        'placeholder' => 'Select a sort order',
                        'type'        => FilterFieldTypeEnum::SELECT_STATIC->value,
                        'value'       => $request->validated()['sort_order'] ?? "",
                        'options'     => BaseHelper::convertKeyValueToLabelValueArray(SortOrderEnum::choices()),
                    ],
                    ExpenseFiltersEnum::CREATED_AT->value   => [
                        'label'       => ExpenseFiltersEnum::CREATED_AT->label(),
                        'placeholder' => 'Enter created at.',
                        'type'        => FilterFieldTypeEnum::DATETIME_RANGE->value,
                        'value'       => $request->validated()[ExpenseFiltersEnum::CREATED_AT->value] ?? "",
                    ],
                ],
            ]);
    }

    public function store(ExpenseCreateRequest $request): RedirectResponse
    {
        try {
            $this->service->create(
                payload: $request->validated()
            );
            $flash = [
                "message" => 'Expense created successfully.'
            ];
        } catch (Exception $e) {
            $flash = [
                "isSuccess" => false,
                "message"   => "Expense creation failed!",
            ];

            Log::error("Expense creation failed!", [
                "message" => $e->getMessage(),
                "traces"  => $e->getTrace()
            ]);
        }

        return redirect()
            ->route('expenses.index')
            ->with('flash', $flash);
    }

    public function update(ExpenseUpdateRequest $request, $id): RedirectResponse
    {
        try {
            $this->service->update(
                id: $id,
                payload: $request->validated()
            );
            $flash = [
                "message" => 'Expense updated successfully.'
            ];
        } catch (ExpenseNotFoundException $e) {
            $flash = [
                "isSuccess" => false,
                "message"   => $e->getMessage(),
            ];
        } catch (Exception $e) {
            $flash = [
                "isSuccess" => false,
                "message"   => "Expense update failed!",
            ];

            Log::error("Expense update failed!", [
                "message" => $e->getMessage(),
                "traces"  => $e->getTrace()
            ]);
        }

        return redirect()
            ->route('expenses.index')
            ->with('flash', $flash);
    }

    public function destroy($id): RedirectResponse
    {
        try {
            $this->service->delete(id: $id);
            $flash = [
                "message" => 'Expense deleted successfully.'
            ];
        } catch (ExpenseNotFoundException $e) {
            $flash = [
                "isSuccess" => false,
                "message"   => $e->getMessage(),
            ];
        } catch (Exception $e) {
            $flash = [
                "isSuccess" => false,
                "message"   => "Expense deletion failed!",
            ];

            Log::error("Expense deletion failed!", [
                "message" => $e->getMessage(),
                "traces"  => $e->getTrace()
            ]);
        }

        return redirect()
            ->route('expenses.index')
            ->with('flash', $flash);
    }
}

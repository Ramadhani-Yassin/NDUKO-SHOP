<?php

namespace App\Http\Controllers;

use App\Enums\Core\FilterFieldTypeEnum;
use App\Enums\Core\FilterResourceEnum;
use App\Enums\Core\SortOrderEnum;
use App\Enums\Order\OrderFieldsEnum;
use App\Enums\Transaction\TransactionExpandEnum;
use App\Enums\Transaction\TransactionFiltersEnum;
use App\Enums\Transaction\TransactionPaidThroughEnum;
use App\Enums\Transaction\TransactionSortFieldsEnum;
use App\Helpers\BaseHelper;
use App\Http\Requests\Transaction\TransactionIndexRequest;
use App\Services\TransactionService;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Barryvdh\DomPDF\Facade\Pdf;

class TransactionController extends Controller
{
    public function __construct(private readonly TransactionService $service)
    {
    }

    public function index(TransactionIndexRequest $request): Response|StreamedResponse|\Illuminate\Http\Response
    {
        if ($request->filled('export')) {
            $page = $this->service->getAll([
                ...$request->validated(),
                'per_page' => 100000,
            ]);
            $rows = $page->items();

            if ($request->export === 'pdf') {
                $headers = ['#', 'Transaction Number', 'Order Number', 'Amount', 'Paid Through', 'Created At'];
                $i = 1;
                $dataRows = [];
                foreach ($rows as $t) {
                    $dataRows[] = [
                        $i++,
                        $t->transaction_number,
                        $t->order?->order_number,
                        $t->amount,
                        $t->paid_through,
                        $t->created_at,
                    ];
                }
                $pdf = Pdf::loadView('pdf.table', [
                    'title'   => 'Transactions',
                    'headers' => $headers,
                    'rows'    => $dataRows,
                ])->setPaper('a4', 'portrait');
                $filename = 'transactions_' . now()->format('Ymd_His') . '.pdf';
                return $pdf->download($filename);
            }

            $filename = 'transactions_' . now()->format('Ymd_His') . '.csv';
            $headers = [
                'Content-Type' => 'text/csv',
                'Content-Disposition' => "attachment; filename=\"{$filename}\"",
            ];
            return response()->stream(function () use ($rows) {
                $out = fopen('php://output', 'w');
                fputcsv($out, ['#', 'Transaction Number', 'Order Number', 'Amount', 'Paid Through', 'Created At']);
                $i = 1;
                foreach ($rows as $t) {
                    fputcsv($out, [
                        $i++,
                        $t->transaction_number,
                        $t->order?->order_number,
                        $t->amount,
                        $t->paid_through,
                        $t->created_at,
                    ]);
                }
                fclose($out);
            }, 200, $headers);
        }

        $params = $request->validated();
        $params['expand'] = array_unique(array_merge($params['expand'] ?? [], [
            TransactionExpandEnum::ORDER->value,
        ]));

        return Inertia::render(
            component: 'Transaction/Index',
            props: [
                'transactions' => $this->service->getAll($params),
                'filters'      => [
                    TransactionFiltersEnum::TRANSACTION_NUMBER->value => [
                        'label'       => TransactionFiltersEnum::TRANSACTION_NUMBER->label(),
                        'placeholder' => 'Enter transaction number.',
                        'type'        => FilterFieldTypeEnum::STRING->value,
                        'value'       => $request->validated()[TransactionFiltersEnum::TRANSACTION_NUMBER->value] ?? "",
                    ],
                    TransactionFiltersEnum::ORDER_ID->value           => [
                        'label'         => TransactionFiltersEnum::ORDER_ID->label(),
                        'placeholder'   => 'Select order.',
                        'type'          => FilterFieldTypeEnum::SELECT->value,
                        'value'         => $request->validated()[TransactionFiltersEnum::ORDER_ID->value] ?? "",
                        'resource'      => FilterResourceEnum::ORDERS->value,
                        'resourceLabel' => OrderFieldsEnum::ORDER_NUMBER->value,
                    ],
                    TransactionFiltersEnum::AMOUNT->value             => [
                        'label'       => TransactionFiltersEnum::AMOUNT->label(),
                        'placeholder' => 'Enter amount.',
                        'type'        => FilterFieldTypeEnum::NUMBER_RANGE->value,
                        'value'       => $request->validated()[TransactionFiltersEnum::AMOUNT->value] ?? "",
                    ],
                    TransactionFiltersEnum::PAID_THROUGH->value       => [
                        'label'       => TransactionFiltersEnum::PAID_THROUGH->label(),
                        'placeholder' => 'Select paid through.',
                        'type'        => FilterFieldTypeEnum::SELECT_STATIC->value,
                        'value'       => $request->validated()[TransactionFiltersEnum::PAID_THROUGH->value] ?? "",
                        'options'     => BaseHelper::convertKeyValueToLabelValueArray(TransactionPaidThroughEnum::choices()),
                    ],
                    "sort_by"                                         => [
                        'label'       => 'Sort By',
                        'placeholder' => 'Select a sort field',
                        'type'        => FilterFieldTypeEnum::SELECT_STATIC->value,
                        'value'       => $request->validated()['sort_by'] ?? "",
                        'options'     => BaseHelper::convertKeyValueToLabelValueArray(TransactionSortFieldsEnum::choices()),
                    ],
                    "sort_order"                                      => [
                        'label'       => 'Sort order',
                        'placeholder' => 'Select a sort order',
                        'type'        => FilterFieldTypeEnum::SELECT_STATIC->value,
                        'value'       => $request->validated()['sort_order'] ?? "",
                        'options'     => BaseHelper::convertKeyValueToLabelValueArray(SortOrderEnum::choices()),
                    ],
                    TransactionFiltersEnum::CREATED_AT->value         => [
                        'label'       => TransactionFiltersEnum::CREATED_AT->label(),
                        'placeholder' => 'Enter created at.',
                        'type'        => FilterFieldTypeEnum::DATETIME_RANGE->value,
                        'value'       => $request->validated()[TransactionFiltersEnum::CREATED_AT->value] ?? "",
                    ],
                ],
            ]);
    }
}

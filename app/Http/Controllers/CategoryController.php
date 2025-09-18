<?php

namespace App\Http\Controllers;

use App\Enums\Category\CategoryFiltersEnum;
use App\Enums\Category\CategorySortFieldsEnum;
use App\Enums\Core\FilterFieldTypeEnum;
use App\Enums\Core\SortOrderEnum;
use App\Exceptions\CategoryNotFoundException;
use App\Helpers\BaseHelper;
use App\Http\Requests\Category\CategoryCreateRequest;
use App\Http\Requests\Category\CategoryIndexRequest;
use App\Http\Requests\Category\CategoryUpdateRequest;
use App\Services\CategoryService;
use Exception;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Barryvdh\DomPDF\Facade\Pdf; // added

class CategoryController extends Controller
{
    public function __construct(private readonly CategoryService $service)
    {
    }

    public function index(CategoryIndexRequest $request): LengthAwarePaginator|Response|StreamedResponse|\Illuminate\Http\Response
    {
        if ($request->inertia == "disabled") {
            $query = $request->validated();
            $query["sort_by"] = CategorySortFieldsEnum::NAME->value;
            return $this->service->getAll($query);
        }

        if ($request->filled('export')) {
            $page = $this->service->getAll([
                ...$request->validated(),
                'per_page' => 100000,
            ]);
            $rows = $page->items();

            if ($request->export === 'pdf') {
                $headers = ['#', 'Name'];
                $i = 1;
                $dataRows = [];
                foreach ($rows as $c) {
                    $dataRows[] = [
                        $i++,
                        $c->name,
                    ];
                }
                $pdf = Pdf::loadView('pdf.table', [
                    'title'   => 'Categories',
                    'headers' => $headers,
                    'rows'    => $dataRows,
                ])->setPaper('a4', 'portrait');
                $filename = 'categories_' . now()->format('Ymd_His') . '.pdf';
                return $pdf->download($filename);
            }

            $filename = 'categories_' . now()->format('Ymd_His') . '.csv';
            $headers = [
                'Content-Type' => 'text/csv',
                'Content-Disposition' => "attachment; filename=\"{$filename}\"",
            ];
            return response()->stream(function () use ($rows) {
                $out = fopen('php://output', 'w');
                fputcsv($out, ['#', 'Name']);
                $i = 1;
                foreach ($rows as $c) {
                    fputcsv($out, [
                        $i++,
                        $c->name,
                    ]);
                }
                fclose($out);
            }, 200, $headers);
        }

        return Inertia::render(
            component: 'Category/Index',
            props: [
                'categories' => $this->service->getAll($request->validated()),
                'filters'    => [
                    CategoryFiltersEnum::NAME->value => [
                        'label'       => CategoryFiltersEnum::NAME->label(),
                        'placeholder' => 'Enter name.',
                        'type'        => FilterFieldTypeEnum::STRING->value,
                        'value'       => $request->validated()[CategoryFiltersEnum::NAME->value] ?? "",
                    ],
                    "sort_by"                        => [
                        'label'       => 'Sort By',
                        'placeholder' => 'Select a sort field',
                        'type'        => FilterFieldTypeEnum::SELECT_STATIC->value,
                        'value'       => $request->validated()['sort_by'] ?? "",
                        'options'     => BaseHelper::convertKeyValueToLabelValueArray(CategorySortFieldsEnum::choices()),
                    ],
                    "sort_order"                     => [
                        'label'       => 'Sort order',
                        'placeholder' => 'Select a sort order',
                        'type'        => FilterFieldTypeEnum::SELECT_STATIC->value,
                        'value'       => $request->validated()['sort_order'] ?? "",
                        'options'     => BaseHelper::convertKeyValueToLabelValueArray(SortOrderEnum::choices()),
                    ]
                ],
            ]);
    }

    public function store(CategoryCreateRequest $request): RedirectResponse
    {
        try {
            $this->service->create(
                payload: $request->validated()
            );
            $flash = [
                "message" => 'Category created successfully.'
            ];
        } catch (Exception $e) {
            $flash = [
                "isSuccess" => false,
                "message"   => "Category creation failed!",
            ];

            Log::error("Category creation failed!", [
                "message" => $e->getMessage(),
                "traces"  => $e->getTrace()
            ]);
        }

        return redirect()
            ->route('categories.index')
            ->with('flash', $flash);
    }

    public function update(CategoryUpdateRequest $request, $id): RedirectResponse
    {
        try {
            $this->service->update(
                id: $id,
                payload: $request->validated()
            );
            $flash = [
                "message" => 'Category updated successfully.'
            ];
        } catch (CategoryNotFoundException $e) {
            $flash = [
                "isSuccess" => false,
                "message"   => $e->getMessage(),
            ];
        } catch (Exception $e) {
            $flash = [
                "isSuccess" => false,
                "message"   => "Category update failed!",
            ];

            Log::error("Category update failed!", [
                "message" => $e->getMessage(),
                "traces"  => $e->getTrace()
            ]);
        }

        return redirect()
            ->route('categories.index')
            ->with('flash', $flash);
    }

    public function destroy($id): RedirectResponse
    {
        try {
            $this->service->delete(id: $id);
            $flash = [
                "message" => 'Category deleted successfully.'
            ];
        } catch (Exception $e) {
            $flash = [
                "isSuccess" => false,
                "message"   => "Category deletion failed!",
            ];
        }

        return redirect()
            ->route('categories.index')
            ->with('flash', $flash);
    }
}

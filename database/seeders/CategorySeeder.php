<?php

namespace Database\Seeders;

use App\Enums\Category\CategoryFieldsEnum;
use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $response = Http::get("https://dummyjson.com/products/categories");
        if ($response->successful()) {
            $categories = $response->object();

            foreach ($categories as $category) {
                $categoriesPayload = [
                    CategoryFieldsEnum::NAME->value       => $category->name,
                ];

                Category::query()->updateOrCreate(
                    $categoriesPayload,
                );
            }
        } else {
            $this->command->error('Failed to seed category data.');
        }
    }
}

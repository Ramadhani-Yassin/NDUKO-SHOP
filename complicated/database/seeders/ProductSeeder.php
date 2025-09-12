<?php

namespace Database\Seeders;

use App\Enums\Product\ProductFieldsEnum;
use App\Enums\Product\ProductStatusEnum;
use App\Models\Category;
use App\Models\Product;
use App\Models\Supplier;
use App\Models\UnitType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $suppliers = Supplier::all();
        $unitTypes = UnitType::all();

        $categories = Category::all();
        foreach ($categories as $category) {
            $categorySlug = Str::slug($category->name);
            $response = Http::get("https://dummyjson.com/products/category/{$categorySlug}");
            if ($response->successful()) {
                $products = array_splice($response->object()->products, 2);

                $productsPayload = [];
                foreach ($products as $product) {
                    // Download the image
                    $imageContent = Http::retry(2)->get($product->images[0])->body();
                    $imageName = basename($product->images[0]);
                    $imagePath = 'products/' . $imageName;
                    Storage::put($imagePath, $imageContent);

                    $productsPayload[] = [
                        ProductFieldsEnum::CATEGORY_ID->value    => $category->id,
                        ProductFieldsEnum::SUPPLIER_ID->value    => $suppliers->random()->id,
                        ProductFieldsEnum::NAME->value           => $product->title,
                        ProductFieldsEnum::PRODUCT_NUMBER->value => 'P-' . Str::random(5),
                        ProductFieldsEnum::DESCRIPTION->value    => $product->description,
                        ProductFieldsEnum::PRODUCT_CODE->value   => Str::random(3),
                        ProductFieldsEnum::ROOT->value           => Str::random(3),
                        ProductFieldsEnum::BUYING_PRICE->value   => $product->price,
                        ProductFieldsEnum::SELLING_PRICE->value  => $product->price + rand(10, 100),
                        ProductFieldsEnum::BUYING_DATE->value    => fake()->date,
                        ProductFieldsEnum::UNIT_TYPE_ID->value   => $unitTypes->random()->id,
                        ProductFieldsEnum::QUANTITY->value       => $product->stock,
                        ProductFieldsEnum::PHOTO->value          => $imageName,
                        ProductFieldsEnum::STATUS->value         => ProductStatusEnum::ACTIVE->value,
                        ProductFieldsEnum::CREATED_AT->value     => now(),
                        "updated_at"                             => now(),
                    ];
                }

                Product::insert($productsPayload);
            } else {
                $this->command->error('Failed to seed product data.');
            }
        }
    }
}

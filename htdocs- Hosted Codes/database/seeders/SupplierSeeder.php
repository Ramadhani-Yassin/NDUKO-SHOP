<?php

namespace Database\Seeders;

use App\Enums\Supplier\SupplierFieldsEnum;
use App\Exceptions\DBCommitException;
use App\Models\Supplier;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class SupplierSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * @throws DBCommitException
     */
    public function run(): void
    {
        if (Supplier::all()->count() >= 10) {
            return;
        }

        $files = File::files(public_path('assets/img/seeder/suppliers'));
        foreach ($files as $file) {
            $imageName = $file->getBasename();
            $imagePath = 'suppliers/' . $imageName;
            Storage::put($imagePath, $file->getContents());

            $suppliersPayload = [
                SupplierFieldsEnum::NAME->value       => fake()->name,
                SupplierFieldsEnum::EMAIL->value      => fake()->email,
                SupplierFieldsEnum::PHONE->value      => fake()->phoneNumber,
                SupplierFieldsEnum::ADDRESS->value    => fake()->address,
                SupplierFieldsEnum::SHOP_NAME->value  => fake()->company,
                SupplierFieldsEnum::CREATED_AT->value => now(),
                "updated_at"                          => now(),
            ];

            Supplier::query()->updateOrCreate(
                [SupplierFieldsEnum::PHOTO->value => $imageName],
                $suppliersPayload
            );
        }
    }
}

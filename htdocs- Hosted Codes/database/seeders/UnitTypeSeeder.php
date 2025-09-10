<?php

namespace Database\Seeders;

use App\Enums\UnitType\UnitTypeFieldsEnum;
use App\Models\UnitType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UnitTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $unitTypes = [
            'p'  => 'Piece',
            'kg' => 'Kilogram',
            'g'  => 'Gram',
            'l'  => 'Liter',
            'ml' => 'Milliliter',
            'm'  => 'Meter',
            'cm' => 'Centimeter',
            'in' => 'Inch',
            'ft' => 'Foot'
        ];

        foreach ($unitTypes as $symbol => $unitType) {
            UnitType::query()->updateOrCreate(
                [
                    UnitTypeFieldsEnum::NAME->value   => $unitType,
                    UnitTypeFieldsEnum::SYMBOL->value => $symbol
                ],
            );
        }
    }
}

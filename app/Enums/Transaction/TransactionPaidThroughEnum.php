<?php

namespace App\Enums\Transaction;

use App\Enums\BaseEnumInterface;
use App\Enums\BaseEnumTrait;

enum TransactionPaidThroughEnum: string implements BaseEnumInterface
{
    use BaseEnumTrait;

    case CASH = 'cash';
    case BANK = 'bank';
    case LOAN = 'loan';

    public static function labels(): array
    {
        return [
            self::CASH->value => "Cash",
            self::BANK->value => "Bank",
            self::LOAN->value => "Loan",
        ];
    }
}

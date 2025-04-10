<?php

namespace App\Enums\Customer;

use App\Enums\BaseEnumInterface;
use App\Enums\BaseEnumTrait;

enum CustomerFieldsEnum: string implements BaseEnumInterface
{
    use BaseEnumTrait;

    case ID         = 'id';
    case NAME       = 'name';
    case EMAIL      = 'email';
    case PHONE      = 'phone';
    case ADDRESS    = 'address';
    case PHOTO      = 'photo';
    case CREATED_AT = 'created_at';

    public static function labels(): array
    {
        return [
            self::ID->value        => "Id",
            self::NAME->value      => "Name",
            self::EMAIL->value     => "Email",
            self::PHONE->value     => "Phone",
            self::ADDRESS->value   => "Address",
            self::PHOTO->value     => "Photo",
        ];
    }
}

<?php

namespace App\Models\Concerns;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

trait HasUlid
{
    public static function bootHasUlid(): void
    {
        static::creating(function (Model $model) {
            $model->uuid ??= Str::ulid()->toBase58();
        });
    }
}

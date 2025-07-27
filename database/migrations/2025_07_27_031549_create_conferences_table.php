<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('conferences', function (Blueprint $table) {
            $table->id();
            $table->ulid('uuid')->index();
            $table->string('name');
            $table->string('location');
            $table->string('url');
            $table->date('start_date');
            $table->date('end_date');
            $table->timestamps();
        });
    }
};

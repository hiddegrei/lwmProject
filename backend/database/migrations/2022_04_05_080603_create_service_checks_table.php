<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_checks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('service_id');
            $table->boolean("opened_by")->default(false);
            $table->string("needs_approval_from")->default(1);
            $table->boolean("opened_for")->default(false);
            $table->index('service_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('service_checks');
    }
};

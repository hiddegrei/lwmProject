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
        Schema::create('service_guides', function (Blueprint $table) {
            $table->id();
            $table->integer('main_index');
            $table->integer('path_index');
            $table->string('question');
            $table->boolean('is_end');
            $table->string('service_key');

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
        Schema::dropIfExists('service_guides');
    }
};

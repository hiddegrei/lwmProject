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
        Schema::create('submit_requests', function (Blueprint $table) {
            $table->id();
            $table->string("needs_approval_from")->nullable();
            $table->string("opened_by")->nullable();
            $table->string("opened_for")->nullable();
            $table->string("title")->nullable();
            $table->string("image")->nullable();
            $table->string("description")->nullable();
            $table->json('dropdowns')->nullable();
            $table->json('questions')->nullable();
            $table->boolean('approved')->default(false);
            $table->boolean('approved_status')->default(false);
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
        Schema::dropIfExists('submit_requests');
    }
};

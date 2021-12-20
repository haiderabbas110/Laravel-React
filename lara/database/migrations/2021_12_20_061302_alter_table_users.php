<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterTableUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('designation')->after('password')->nullable()->default(null);
            $table->string('profile_image')->after('password')->nullable()->default(null);
            $table->string('skills')->after('password')->nullable()->default(null);
            $table->string('phone_number')->after('password')->nullable()->default(null);
            $table->string('emergency_number')->after('password')->nullable()->default(null);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}

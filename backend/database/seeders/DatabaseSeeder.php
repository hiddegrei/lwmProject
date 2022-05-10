<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
//            BusinessSupportSeeder::class,
//            FacilitiesSeeder::class,
            TodoSeeder::class,
            UserSeeder::class,
            ServiceSeeder::class,
            ServiceCheckSeeder::class,
            ServiceTrackSeeder::class,

        ]);
    }
}

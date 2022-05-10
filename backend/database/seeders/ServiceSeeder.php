<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        // $factory->afterMaking(App\Models\Service::class, function ($service, $faker) {
        //     $service->save(factory(App\Models\ServiceCheck::class)->make());
        //     $service->save(factory(App\Models\ServiceTrack::class)->make());
        // });

        // \App\Models\Service::factory(50)->create();

        \App\Models\Service::factory(50)->create()->each(function($u) {
            $u->checks()->create();
            $u->serviceTrack()->create( );

        });
    }
}

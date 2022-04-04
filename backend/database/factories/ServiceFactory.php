<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Service>
 */
class ServiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $serviceTypes=["businesssupport","homeoffice","facilities","finance","hrpayroll","itservices","masterdata"];
       
        return [
            'title' => $this->faker->name(),
            'description' => $this->faker->paragraph(1),
            'servicetype' => $serviceTypes[$this->faker->numberBetween(0, 6)],
            'dropdowns' => [["title" => $this->faker->name(),"options"=>[$this->faker->name()]],["title" => $this->faker->name(),"options"=>[$this->faker->name()]]], 
            
        ];
    }
}

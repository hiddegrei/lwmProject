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
       
        $examples=[
            ["homeoffice","laptop","Request for a new laptop",[["title"=>"Choose the required laptop","options"=>["Laptop with a 13,3 inch screen","Second hand, older laptop[ subtract € 1.215,00 ]"]],["title"=>"Reason for request","options"=>["New Request","Replacement"]]],"services/6BUMBou7MYWNE06xFpzABFtjnOC6Vc5hmji8yVYl.png"]
        ];
       
        return [
            // 'title' => $this->faker->name(),
            // 'description' => $this->faker->paragraph(1),
            // 'servicetype' => $serviceTypes[$this->faker->numberBetween(0, 6)],
            // 'dropdowns' => [["title" => $this->faker->name(),"options"=>[$this->faker->name()]],["title" => $this->faker->name(),"options"=>[$this->faker->name()]]], 
            // 'image' => 'services/r0nXLHzXreYF4QUTRQjFORey7s9xnPGa67sRu0xF.png'
            'title' => $examples[0][1],
            'description' => $examples[0][2],
            'servicetype' => $examples[0][0],
            'dropdowns' => $examples[0][3], 
            'image' => $examples[0][4]
            
        ];
    }
}

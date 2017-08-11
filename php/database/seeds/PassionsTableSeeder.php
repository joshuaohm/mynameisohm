<?php

use Illuminate\Database\Seeder;

class PassionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $passions = array("PHP","CSS","HTML","JavaScript","Java","C#","C","Mobile","Space Exploration","Science","Music","Humanity","WebVR","Animals","Languages","History","Android","Video Games","Astronomy");

        foreach($passions as $index => $passion){

        }

        DB::table('passions')->insert([
            'id' => $index+1,
            'value' => $passion 
        ]);

    }
}


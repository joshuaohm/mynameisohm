<?php

use Illuminate\Database\Seeder;

class WorksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('works')->insert([
            'id' => 1,
            'url' => "http://bestappl.es",
            'name' => "bestapples",
            'details' => "Assisted in rewriting back end routing, Developed localization system, Managed localized content", 
        ]);

        DB::table('works')->insert([
            'id' => 2,
            'url' => "http://pearsonpkg.com/news",
            'name' => "pearsonpkg",
            'details' => "Created back end and pagination for news system, Implemented news category display and search via Drupal tags", 
        ]);

        DB::table('works')->insert([
            'id' => 3,
            'url' => "http://uintabrewing.com",
            'name' => "uintabrewing",
            'details' => "Minor adjustments to front end site modules, Created Craft CMS plugins to power forms, Created logic to power Beer Awards stats ", 
        ]);

        DB::table('works')->insert([
            'id' => 4,
            'url' => "http://cheetosstore.com",
            'name' => "cheetosstore",
            'details' => "Handled front end and back end for the landing page and faqs page, Implemented a custom CMS in Laravel for client to manage carousel items and links", 
        ]);

    }
}


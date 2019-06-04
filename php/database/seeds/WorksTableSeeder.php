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
            'url' => "",
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
            'url' => "",
            'name' => "cheetosstore",
            'details' => "Handled front end and back end for the landing page and faqs page, Implemented a custom CMS in Laravel for client to manage carousel items and links", 
        ]);

        DB::table('works')->insert([
            'id' => 5,
            'url' => "http://bergnw.com/case-study/acco",
            'name' => "acco",
            'details' => "Turned designs into front end layouts, Deployed updates and managed server", 
        ]);

        DB::table('works')->insert([
            'id' => 6,
            'url' => "https://moat.com/creative/502cdab53e6f9667a1bc955b0ab42912?region=US",
            'name' => "jim-beam",
            'details' => "Turned designs into an animated banner, Created rosette animation with css sprites, Managed with DoubleClick Studio", 
        ]);

        DB::table('works')->insert([
            'id' => 7,
            'url' => "https://moat.com/creative/aacbf04d3eabcd7b497b5b9c5a80c41b?region=US",
            'name' => "neustar",
            'details' => "Turned designs into an animated banner, Created background gradient animation with css, Managed with DoubleClick Studio", 
        ]);

        DB::table('works')->insert([
            'id' => 8,
            'url' => "https://merchantscraft.com/",
            'name' => "merchantscraft",
            'details' => "Turned designs into layouts, Added functionality with JavaScript, Created the store locator with Google Maps API", 
        ]);
    }
}


<?php

use Illuminate\Database\Seeder;

class ProjectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('projects')->insert([
            'id' => 1,
            'url' => "http://timetracker.mynameisohm.com",
            'title' => "Time Tracker",
            'name' => "time-tracker",
            'details' => "An app for your time spent working on tasks/projects. Built with React and Laravel.",
            'repo' => "https://github.com/joshuaohm/TimeTracker/" 
        ]);

        DB::table('projects')->insert([
            'id' => 2,
            'url' => "https://github.com/joshuaohm/status-panel",
            'title' => "Status Panel",
            'name' => "status-panel",
            'details' => "Client and Server apps that allow you to monitor device connections and send messages. Built with Websockets, Node, and a little Android",
            'repo' => "https://github.com/joshuaohm/status-panel/" 
        ]);
    }
}


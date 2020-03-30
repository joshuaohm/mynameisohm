<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(PassionsTableSeeder::class);
        $this->call(WorksTableSeeder::class);
        $this->call(ProjectsTableSeeder::class);
    }
}

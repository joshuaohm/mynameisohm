@extends('layout.default')
@section('content')
{{ Html::script('js/my-projects.js') }}
{{ Html::style('css/my-projects.css') }}
<div class="my-projects-container">

	@foreach ($projects as $index => $project)
		
		<div class="project-holder">
			<div class="title">{{$project->title}}</div>
			<div class="image">
				<a class="image-link" href="{{ $project->url }}">
					<img class="small" src='{{ asset("img/".$project->name."-small.jpg") }}' data-index="{{ ($index) }}"></img>
					<img class="big" src='{{ asset("img/".$project->name."-big.jpg") }}' data-index="{{ ($index) }}"></img>
				</a>
			</div>
			<div class="details-wrapper">
				<div class="details">{{ $project->details }}</div>

				<div class="btns-row">
					<div class="btns-wrapper">
						<a class="btn link" href="{{ $project->url }}">View App</a>
						<a class="btn repo" href='{{ $project->repo }}'>View Source</a>
					</div>
				</div>
			</div>
		</div>
	
	@endforeach
</div>
@stop
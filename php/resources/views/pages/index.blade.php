@extends('layout.default')
@section('content')
{{ Html::script('js/index.js') }}
{{ Html::style('css/index.css') }}
<div class="index-container">

	<div class="content">
		<h1> Hi, My name is Joshua Ohm </h1>

		<h3> I am a developer from the <span class="pnw">Pacific Northwest</span> </h3>
	</div>
	<div class="content large-margin-bottom">
		<div class="sentence">I am passionate about</div>
		@foreach ($passions as $index => $passion)
			@if ($index == 0)
				<div class="passion visible" id="index-{{$index}}">
					&nbsp;{{$passion->value}}
				</div>
			@else
			<div class="passion" id="index-{{$index}}">
				&nbsp;{{$passion->value}}
			</div>
			@endif
		@endforeach
	</div>
	<div class="content">
		<h2> Hit <span class="yellow">that</span> hamburger on the top right to learn more about me and explore my work. </h2>
	</div>
</div>
@stop

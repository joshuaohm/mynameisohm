@extends('layout.default')
@section('content')
{{ Html::script('js/index.js') }}
{{ Html::style('css/index.css') }}
<div class="index-container">

	<svg id="svg-animation"></svg>
	<div class="content">
		<div class="sentence block">Hi, My name is Joshua Ohm</div>

		<div class="sentence-small">I am a developer from the <span class="pnw">Pacific Northwest</span></div>
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
	<div class="content large-margin-bottom">
		<div class="sentence-mid">Check out the links above to explore my work.</div>
	</div>
	<div class="content social-content">
		<div class="sentence-mid large-margin-bottom">You can also learn more about me at my social links below:</div>
		<div class="social-container">
			<div class="social-wrapper">
				<a href="https://www.linkedin.com/in/joshuaohm/"><i class="icon-linkedin-squared"></i></a>
			</div>
			<div class="social-wrapper">
				<a href="https://www.github.com/joshuaohm"><i class="icon-github-squared"></i></a>
			</div>
		</div>
	</div>
</div>
@stop

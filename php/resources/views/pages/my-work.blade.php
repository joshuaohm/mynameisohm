@extends('layout.default')
@section('content')
{{ Html::script('js/my-work.js') }}
{{ Html::style('css/my-work.css') }}
<div class="my-work-container">
	<div class="row">
		<div class="top">
			<div class="btn-wrapper">
				<div class="btn left">prev</div>
			</div>
			@foreach ($works as $index => $work)
					@if ($index == 0)
						<a href="{{ $work->url }}" id="img-{{ $index }}"><img class="active" src='{{ asset("img/".$work->name."-big.jpg") }}'></a>
					@else
						<a href="{{ $work->url }}" id="img-{{ $index }}"><img src='{{ asset("img/".$work->name."-big.jpg") }}'></a>
					@endif
			@endforeach
			<div class="btn-wrapper">
				<div class="btn right">next</div>
			</div>
		</div>
		<div class="bottom">
			@foreach ($works as $index => $work)
				@if ($index == 0)
					<div class="details active" id="details-{{ $index }}">
						@foreach ($details[$index] as $detail)
							<div class="detail">{{ $detail }}</div>
						@endforeach
						<div class="btn-wrapper">
							<a class="btn link" href='{{ $work->url }}'>View Site</a>
						</div>
					</div>
				@else
					<div class="details" id="details-{{ $index }}">
						@foreach ($details[$index] as $detail)
							<div class="detail">{{ $detail }}</div>
						@endforeach
						<div class="btn-wrapper">
							<a class="btn link" href='{{ $work->url }}'>View Site</a>
						</div>
					</div>
				@endif
			@endforeach
		</div>
	</div>
</div>
@stop
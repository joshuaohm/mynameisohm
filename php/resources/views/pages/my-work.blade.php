@extends('layout.default')
@section('content')
{{ Html::script('js/my-work.js') }}
{{ Html::style('css/my-work.css') }}
<div class="my-work-container">
	<div class="headline">My Work</div>
	@foreach ($works as $index => $work)
		@if ($index % 2 == 0)
			<div class="row">
				<div class="row-wrapper">
					<div class="item big" data-index="{{ $index }}">
						<div class="details" data-index="{{ $index }}">
							<div class="details-wrapper" data-index="{{ $index }}">
								@foreach ($details[$index] as $detail)
									<div class="detail">{{ $detail }}</div>
								@endforeach
							</div>
						</div>
						<a href='{{ $works[$index]->url}}' data-index="{{ $index }}">
							<img src='{{ asset("img/".$works[$index]->name."-big.jpg") }}' data-index="{{ $index }}"></img>
						</a>
					</div>
					<div class="item small" data-index="{{ $index }}">
						<div class="details" data-index="{{ $index }}">
							<div class="details-wrapper" data-index="{{ $index }}">
								@foreach ($details[$index] as $detail)
									<div class="detail">{{ $detail }}</div>
								@endforeach
							</div>
						</div>
						<a href='{{ $works[$index]->url}}' data-index="{{ $index }}">
							<img src='{{ asset("img/".$works[$index]->name."-small.jpg") }}' data-index="{{ $index }}"></img>
						</a>
					</div>
					@if ( ($index + 1) <= count($works) )
						<div class="item big" data-index="{{ ($index+1) }}">
							<div class="details" data-index="{{ ($index+1) }}">
								<div class="details-wrapper" data-index="{{ ($index+1) }}">
									@foreach ($details[$index+1] as $detail)
										<div class="detail">{{ $detail }}</div>
									@endforeach
								</div>
							</div>
							<a href='{{ $works[$index+1]->url}}' data-index="{{ ($index+1) }}">
								<img src='{{ asset("img/".$works[$index+1]->name."-big.jpg") }}' data-index="{{ ($index+1) }}"></img>
							</a>
						</div>
						<div class="item small" data-index="{{ ($index+1) }}">
							<div class="details" data-index="{{ ($index+1) }}">
								<div class="details-wrapper" data-index="{{ ($index+1) }}">
									@foreach ($details[$index+1] as $detail)
										<div class="detail">{{ $detail }}</div>
									@endforeach
								</div>
							</div>
							<a href='{{ $works[$index+1]->url}}' data-index="{{ ($index+1) }}">
								<img src='{{ asset("img/".$works[$index+1]->name."-small.jpg") }}' data-index="{{ ($index+1) }}"></img>
							</a>
						</div>
					@endif
				</div>
			</div>
		@endif
	@endforeach
</div>
@stop
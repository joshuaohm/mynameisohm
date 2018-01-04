@extends('layout.default')
@section('content')
{{ Html::script('js/experiments.js') }}
<div class="experiments-container">
	<div class="row">
        <div class="top">
            <div class="btn-wrapper" id="left-wrapper">
                <div class="btn left-btn">
                    <svg class="svg" id="prev"></svg>
                    <div class="left">Prev</div>
                </div>
            </div>
            <div class="image-wrapper">
                <div class="image">
                    @foreach ($projects as $index => $project)
                    	@if ($index == 0)
                    		<div class="source active" id="img-{{ $index }}" 
                    		style="background-image: url({{ asset('img/'.$project->name.'.jpg') }} )">
                                <a href="{{ $project->url }}"></a>
                    		</div>
                    	@else
                    		<div class="source" id="img-{{ $index }}" 
                    		style="background-image: url({{ asset('img/'.$project->name.'.jpg') }} )">
                                <a href="{{ $project->url }}"></a>
                    		</div>
                    	@endif
                    @endforeach
                </div>
            </div>
            <div class="btn-wrapper" id="right-wrapper">
                <div class="btn right-btn">
                    <svg class="svg" id="next"></svg>
                    <div class="right">Next</div>
                </div>
            </div>
            <div class="mobile-btn-row-wrapper">
                <div class="btn left-btn">
                  <svg class="svg" id="mobile-prev"></svg>
                  <div class="left">Prev</div>
                </div>
                <div class="btn right-btn">
                  <svg class="svg" id="mobile-next"></svg>
                  <div class="right">Next</div>
                </div>
            </div>
        </div>
        <div class="bottom">
            @foreach ($projects as $index => $project)
            	@if ($index == 0)
            		<div class="details active" id="details-{{ $index }}">
            			<div class="title">{{ $project->title }}</div>
            			<div class="detail">{{ $project->details }}</div>
            			<div class="btns-wrapper">
            				<div class="btn-wrapper">
								<a class="btn link" href="{{ $project->url }}">View App</a>
							</div>
							<div class="btn-wrapper">
								<a class="btn link" id="source-link" href='{{ $project->repo }}'>View Source</a>
							</div>
						</div>
            		</div>
            	@else
            		<div class="details" id="details-{{ $index }}">
            			<div class="title">{{ $project->title }}</div>
            			<div class="detail">{{ $project->details }}</div>
            			<div class="btns-wrapper">
                            @if($project->url === $project->repo)
                                <div class="btn-wrapper">
                                    <a class="btn link" href='{{ $project->repo }}'>View Source</a>
                                </div>
                            @else
                                <div class="btn-wrapper">
                                    <a class="btn link" href="{{ $project->url }}">View App</a>
                                </div>
    							<div class="btn-wrapper">
    								<a class="btn link" id="source-link" href='{{ $project->repo }}'>View Source</a>
    							</div>
                            @endif
						</div>
            		</div>
            	@endif
            @endforeach
        </div>
    </div>
</div>
@stop
{{ Html::script('js/index.js') }}
{{ Html::style('css/index.css') }}
<div class="index-container">
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
	<div class="content">
		<div class="sentence-mid">Check out the links at the top to learn more about me and explore my work.</div>
	</div>
</div>

@extends('layout.default')
@section('content')
{{ Html::script('js/landing.js') }}
<div class="landing-container">
  <div class="content">
    <div class="left">
      <h1 class="name">Joshua Ohm</h1>
      <h2 class="title">Developer from<br>the Pacific Northwest</h2>
      <h3 class="passions">Passionate about: <br>
        <div class="passion" id="passion"></div>
        <div class="cursor empty"></div>
      </h3>
    </div>
    <div class="right">
      <canvas id="sphere3d" width="200" height="200" />
    </div>
  </div>
</div>
@stop

<!doctype html>
<html>
<head>
    @include('includes.head')
</head>
<body>

<div class="container mid" id="container">
    <header class="header">
        @include('includes.header')
    </header>
    <div class="load over" id="load"></div>
    <div id="main" class="main-body">
        <div class="body-content">
            @yield('content')
        </div>
    </div>
</div>
<div class="side-menu under">
    <div class="side-header">
        <div class="close-button-container" id="close-button-container">
            <div class="close-button">
                <div class="left"></div>
                <div class="right"></div>
            </div>
        </div>
    </div>
    <div class="side-nav">
        <ul class="nav-list">
            @foreach($links as $index => $link)
                <li class="list-item" data-url="{{ $link->url }}">{{$link->text}}</li>
            @endforeach
        </ul>
    </div>
</div>
</body>
</html>

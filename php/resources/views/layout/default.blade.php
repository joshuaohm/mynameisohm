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
            <li class="list-item">COMING SOON</li>
        </ul>
    </div>
</div>
</body>
</html>

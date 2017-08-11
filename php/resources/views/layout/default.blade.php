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
</body>
</html>

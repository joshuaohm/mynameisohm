<!doctype html>
<html>
<head>
    @include('includes.head')
</head>
<body>

<div class="main-wrapper mid" id="container">
    <header>
        @include('includes.header')
    </header>
    @yield('content')
</div>
</body>
</html>

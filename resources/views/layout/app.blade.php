<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="description" content="ST Company is a software company that develops and maintains web and mobile applications, websites, etc.">
    <meta name="keywords" content="ST Company, Programming, Laravel, Vue.js, React, AWS">
    <meta name="viewport" content="width=device-width">
    <meta name="theme-color" content="#ffffff">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/png" href="{{ asset('img/logo.png') }}"/>
    <title>ST Company</title>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport'/>

    <link href="{{ mix('css/bootstrap.css') }}" rel="stylesheet" type='text/css' media="all"/>
    <link href="{{ mix('css/custom.css') }}" rel="stylesheet" type='text/css' media="all"/>

    <!--     Fonts and icons     -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" type='text/css' media="all">
    <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700' rel='stylesheet' type='text/css' media="all">

    <!-- Chokes policy popup -->
    <link rel="stylesheet" type="text/css" href="https://wpcc.io/lib/1.0.2/cookieconsent.min.css"/>
    <script src="https://wpcc.io/lib/1.0.2/cookieconsent.min.js"></script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-165396411-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-165396411-1');
    </script>

    <script>
        setTimeout(function() {
            window.wpcc.init({
                "colors": {
                    "popup": {
                        "background":"#f6f6f6","text":"#000000","border":"#555555"
                    },
                    "button": {
                        "background":"#555555","text":"#ffffff"}
                },
                "position":"bottom-right",
                "padding":"small",
                "margin":"small",
                "transparency":"10",
                "fontsize":"small"
            })
        }, 5000);
    </script>
    <!-- End Chokes policy popup -->
</head>
<body class="landing-page">

<div class="loading ">
    <div class="loading-container">
        <p>Fetching...</p>
        <img class="loader" src="{{ asset('img/rubik.svg') }}" alt="Loading..."/>
    </div>
</div>

@extends('layout.navbar')

<div class="wrapper">
    @yield('content')

    @extends('layout.footer')
</div>
</body>

<script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/vendor.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/custom.js') }}"></script>

<script>
    particlesJS.load('particles-js', 'assets/particles.json');
</script>
</html>

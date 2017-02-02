function setMainBinds(){
    $('#menu-button-container').on('click', openMenu);
    $('.side-menu .nav-list .list-item').on('click', handleLinkClick);
}

function checkCookie(){

    if(getCookie("lastPage") !== ""){
        loadUrl(getCookie("lastPage"));
    }
}

function openMenu(e){

    e.preventDefault();
    e.stopPropagation();

    if(!$('.container').hasClass('slide-right')){
        $('body').addClass('scroll-lock');
        $('html').addClass('scroll-lock');
        $('.container').addClass('slide-right');
        $('#menu-button-container .menu-button').children().addClass('turn-brown');
        $('#close-button-container .close-button').children().removeClass('turn-brown');
        $('#menu-button-container').off('click');
        $('#container').on('click', closeMenu);
        $('#close-button-container').on('click', closeMenu);
    }
}

function closeMenu(e){

    e.preventDefault();
    e.stopPropagation();

    if($('.container').hasClass('slide-right')){
        $('body').removeClass('scroll-lock');
        $('html').removeClass('scroll-lock');
        $('.container').removeClass('slide-right');
        $('#menu-button-container .menu-button').children().removeClass('turn-brown');
        $('#close-button-container .close-button').children().addClass('turn-brown');
        $('#container').off('click');
        $('#close-button-container').off('click');
        $('#menu-button-container').on('click', openMenu);
    }
}

function activateLink(){

    $('.list-item').removeClass('active');
    $('.list-item[data-url="/home"]').addClass('active');
}

function handleLinkClick(e){

    e.preventDefault();
    e.stopPropagation();

    //Prevent unnecessary loads
    if(!$(e.target).hasClass('active')){
        $('.side-menu .nav-list .list-item').removeClass('active');
        $(e.target).addClass('active');

        var url = $(e.target).data('url');

        loadUrl(url);
        
    }
    
}

function fadeLoadScreenIn(){
    $('#load').addClass('fade-in');
}

function fadeLoadScreenOut(){

    setTimeout(function(){
        $('#load').removeClass('fade-in');
    },100);

}

function loadUrl(url, e){

    $.ajax({
        url: url,
        type: 'GET',
        async: true,
        success: function (data) {
            fadeLoadScreenIn();
            setTimeout(function() {
                $('.body-content').html(data).promise().done(fadeLoadScreenOut());
            },100);     
        }
    });

}

$(document).ready(function (){

    setMainBinds();
    //checkCookie();
    activateLink();

});
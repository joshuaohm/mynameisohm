function setMainBinds(){
    $('#menu-button-container').on('click', openMenu);
    $('.side-menu .nav-list .list-item').on('click', handleLinkClick);
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
    $('.list-item[data-url="/"]').addClass('active');
}

function handleLinkClick(e){

    e.preventDefault();
    e.stopPropagation();

    $('.side-menu .nav-list .list-item').removeClass('active');
    $(e.target).addClass('active');
    var url = $(e.target).data('url');
    loadUrl(url);
}

function loadUrl(url, e){

    $.ajax({
        url: url,
        type: 'GET',
        async: true,
        success: function (data) {
            $('.body-content').html(data);
            setTimeout(function(){
                $('#close-button-container').trigger('click');
            },250);  
        }
    });

}

$(document).ready(function (){

    setMainBinds();
    activateLink();

});
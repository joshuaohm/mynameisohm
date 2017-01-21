function setMainBinds(){
    $('#menu-button-container').on('click', openMenu);
}

function openMenu(e){

    e.preventDefault();
    e.stopPropagation();

    if(!$('.container').hasClass('slide-right')){
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
        $('.container').removeClass('slide-right');
        $('#menu-button-container .menu-button').children().removeClass('turn-brown');
        $('#close-button-container .close-button').children().addClass('turn-brown');
        $('#container').off('click');
        $('#close-button-container').off('click');
        $('#menu-button-container').on('click', openMenu);
        
    }
}

$(document).ready(function (){

    setMainBinds();

});

function setMyWorkBinds(){

	$('.my-work-container .item').on('mouseenter', fadeMenuIn);
	$('.my-work-container .item').on('mouseleave', fadeMenuOut);
	$('.my-work-container .item').on('click', navigateLink);
}

function setPageCookie(){
	setCookie("lastPage", 'my-work', '1');
}


function fadeMenuIn(e){

	e.preventDefault();
	e.stopPropagation();

	var index = $(e.target).data('index');

	$('.my-work-container .details-wrapper[data-index='+index+']').addClass('show');
	$('.my-work-container .details[data-index='+index+']').addClass('fade-in');
}

function fadeMenuOut(e){

	e.preventDefault();
	e.stopPropagation();

	var index = $(e.target).data('index');

	$('.my-work-container .details[data-index='+index+']').removeClass('fade-in');
	setTimeout(function(){
		$('.my-work-container .details-wrapper[data-index='+index+']').removeClass('show');
	},500);
	
}

function activateLink(){

	$('.list-item').removeClass('active');
    $('.list-item[data-url="/my-work"]').addClass('active');
}

function navigateLink(e){

	e.preventDefault();
    e.stopPropagation();

	var index = $(e.target).data('index');

	if(typeof(index) === "undefined"){
		index = $(e.target).parent().data('index');
	}

	var url = $('.item[data-index='+index+']').children('a').attr('href');
	window.open(url, '_blank');
}

$(document).ready(function (){

	//setPageCookie();
	setMyWorkBinds();
	activateLink();

});
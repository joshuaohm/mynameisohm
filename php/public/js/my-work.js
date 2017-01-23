
function setMyWorkBinds(){

	$('.my-work-container .item').on('mouseenter', fadeMenuIn);
	$('.my-work-container .item').on('mouseleave', fadeMenuOut);
	$('.my-work-container .item').on('click', navigateLink);
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

function navigateLink(e){

	e.preventDefault();
    e.stopPropagation();

	var index = $(e.target).data('index');

	if(typeof(index) === "undefined"){
		index = $(e.target).parent().data('index');
	}

	var url = $('.item[data-index='+index+']').children('a').attr('href');
	window.location.href = url;
}

$(document).ready(function (){

	setMyWorkBinds();

});
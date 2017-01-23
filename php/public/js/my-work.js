
function setMyWorkBinds(){
	$('.my-work-container .item').on('mouseenter click', fadeMenuIn);
	$('.my-work-container .item').on('mouseleave', fadeMenuOut);
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

$(document).ready(function (){

	setMyWorkBinds();

});
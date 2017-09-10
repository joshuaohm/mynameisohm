function activateWorkLeft(next){

	$('#img-'+next+" img").addClass('active');
	$('#details-'+next).addClass('active');
}

function activateWorkRight(next){
	$('#img-'+next+" img").addClass('active-prev');
	$('#details-'+next).addClass('active');
}

function activateWorkLink(){

	$('#my-work-link').addClass('active');
}

function deactivateWork(){

	$('.my-work-container .top img').removeClass('active');
	$('.my-work-container .top img').removeClass('active-prev');
	$('.my-work-container .bottom .details').removeClass('active');
}

function determineNextSlide(active, next, count){

	//determine which slide to transition to
	console.log(active+" "+next+" "+count);

	if(active == 0 && next == -1){
		next = +count - 1;
	}
	else if (active == parseInt(count - 1) && next == 1){
		next = 0;
	}
	else{
		next = +active + +next;
	}

	return next;
}

function getActiveIndex(){

	var id = $('.my-work-container .bottom .active').attr('id');

	return id.split('-')[1];

}

function getItemCount(){

	return $('.my-work-container .top img').length;
}

function handleButtonClick(e){

	e.preventDefault();
	e.stopPropagation();

	var inc = 0;

	if($(e.target).hasClass('left')){
		inc = -1;
	}
	else if($(e.target).hasClass('right')){
		inc = 1;
	}

	var active = getActiveIndex();
	count = getItemCount();

	next = determineNextSlide(active, inc, count);

	console.log(next);

	deactivateWork();

	if(inc == 1){
		activateWorkLeft(next);
	}
	else if(inc == -1){
		activateWorkRight(next);
	}
}

function setMyWorkBinds(){

	$('.my-work-container .top .btn').on('click', handleButtonClick);
}

$(document).ready(function (){

	setMyWorkBinds();
	activateWorkLink();

});
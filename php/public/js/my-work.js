
function setMyWorkBinds(){

	$('.my-work-container .item').on('mouseenter touchstart', handleMenuFadeIn);
	$('.my-work-container .item').on('mouseleave', fadeMenuOut);
	
	$('.my-work-container .item').on('click', handleLinkClick);
}

function activateWorkLink(){

	$('#my-work-link').addClass('active');
}

(function( $ ){

	$.fn.filterItemIndex = function(index) {

		return this.filter("[data-index='"+index+"']");
	};

}( jQuery ));

function getIndex(e){

	var index = $(e.target).data('index');

	if(typeof(index) === "undefined"){
		index = $(e.target).parent().data('index');
	}

	return index;
}

function checkIsSmall(index){
	var conditional = $('.my-work-container .row-wrapper .small').filterItemIndex(index).css('display');
	if(conditional == 'block' || conditional == 'inline-block'){
		return true;
	}
	else{
		return false;
	}
}

function handleLinkClick(e){

	e.preventDefault();
	e.stopPropagation();

	var index = getIndex(e);
	navigateLink(index);
}


function handleMenuFadeIn(e){

	e.preventDefault();
	e.stopPropagation();

	var index = getIndex(e);
	var isSmall = checkIsSmall(index);
	var selector = "";

	//determine which set of items to interact with
	if(isSmall){
		selector = ".my-work-container .row-wrapper .small > .details";
	}
	else{
		selector = ".my-work-container .row-wrapper .big > .details";
	}

	//If a Mobile interaction
	if(e.originalEvent.type === 'touchstart' ){

		//Already visible, treat like a click
		if($(selector).filterItemIndex(index).hasClass('fade-in')){
			navigateLink(index);
		}
		//Make details visible
		else{
			$('.my-work-container .item > .details').removeClass('fade-in').promise().done(fadeMenuIn(selector, index));
		}
	}
	else if(e.originalEvent.type === 'mouseover'){
		$('.my-work-container .item > .details').removeClass('fade-in').promise().done(fadeMenuIn(selector,index));
	}
}

function fadeMenuIn(selector, index){
	$(selector).filterItemIndex(index).addClass('fade-in');
}

function fadeMenuOut(){
	$('.my-work-container .details').removeClass('fade-in');	
}

function activateLink(){

	$('.list-item').removeClass('active');
    $('.list-item[data-url="/my-work"]').addClass('active');
}

function navigateLink(index){

	var url = $('.item').filterItemIndex(index).children('a').attr('href');
	window.open(url, '_blank');
}

$(document).ready(function (){

	setMyWorkBinds();
	activateWorkLink();

});
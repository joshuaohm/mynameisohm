function setIndexBinds(){
	$('.index-container .content .yellow').on('click', hitThatBurger);
}

function setPageCookie(){

	setCookie("lastPage", 'home', '1');
}

function hitThatBurger(e){

	e.preventDefault();
    e.stopPropagation();
    
	$('#menu-button-container').trigger('click');
}

function rotatePassions(ids){
	
	var current = $('.passion.visible').attr('id');
	$('.passion.visible').removeClass('visible');

	var id = ids[Math.floor(Math.random() * ids.length)];

	//Move to the next one in the list if we randomly pick a repeat.
	if(current === id){

		current = current.trim();
		current = current.split('-');
		var num = parseInt(current[1]);

		if(num >= ids.length){
			
			if(ids.length > 0){
				num = ids.length - 1;
			}
			else{
				num = 0;
			}
		}
		else if( num < 0){
			num = 0;
		}

		id = "index-"+num;
	}

	$('.passion#'+id).addClass('visible');
}

function activateLink(){

	$('.list-item').removeClass('active');
    $('.list-item[data-url="/home"]').addClass('active');
}

var interval;

$(document).ready(function (){

	//setPageCookie();
	setIndexBinds();
	activateLink();

	var ids = new Array();

	$('.passion').each(function() {
	    ids.push(this.id);
	});

	//Rotate the visible 'passion'
	if(typeof interval != "number"){
		interval = setInterval(function (){
			rotatePassions(ids);
		},2500);
	}
		

    
});
function setIndexBinds(){

}

function activateHomeLink(){

	$('#home-link').addClass('active');

}

function animationSet(){

	var svg = Snap("#svg-animation").attr({viewBox: "0 0 400 200"});


	var path = svg.path("M 200 0 L 300 100 L 200 200 L 100 100 L 200 0").attr({ fill: "none", stroke: "#3e2a14", strokeWidth: 2, opacity: "1", strokeDasharray: "100, 50", strokeDashoffset: 0, class: "svg-path" });
	var path2 = svg.path("M 150 150 L 100 200 L 0 100").attr({ fill: "none", stroke: "#3e2a14", opacity: "1", strokeWidth: 2, strokeDasharray: "30, 10", strokeDashoffset: 0, class: "svg-path"});
	var path3 = svg.path("M 250 150 L 300 200 L 400 100").attr({ fill: "none", stroke: "#3e2a14", opacity: "1", strokeWidth: 2, strokeDasharray: "30, 10", strokeDashoffset: 0, class: "svg-path" });

	animationLoopOn(svg, path, path2, path3);
	
}

function animationLoopOn(svg, path, path2, path3){

	var max = 2000;
	var timer = 30000;

	Snap.animate(0, max, function ( value ){

		path.attr({ 'strokeDashoffset': value, "strokeDasharray": "100, 50" });
		path2.attr({ 'strokeDashoffset': value, "strokeDasharray": "30, 10" });
		path3.attr({ 'strokeDashoffset': value, "strokeDasharray": "30, 10" });

	}, timer, mina.linear, repeatAnimation(timer, max, svg, path, path2, path3));
}

function repeatAnimation(timer, max, svg, path, path2, path3){

	setTimeout(function(){

		console.log('yup');

		Snap.animate(0, max, function ( value ){

			path.attr({ 'strokeDashoffset': value });
			path2.attr({ 'strokeDashoffset': value });
			path3.attr({ 'strokeDashoffset': value });

		}, timer, mina.linear, repeatAnimation(timer, max, svg, path, path2, path3) );

	}
	,timer);

	

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

var interval;

$(document).ready(function (){

	//setPageCookie();
	setIndexBinds();
	activateHomeLink();
	animationSet();

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
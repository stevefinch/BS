var switch_images = ['MtHoodVillages-07-2000.jpg','beer1.jpg', 'beer2.jpg', 'weed.jpg'];
var click_main_image = 0;


/*
function test(){
	alert('Its a test, ya dick!');
}

test();
*/

document.querySelector('.main-img').addEventListener('click', function() {
	var main_image_DOM = document.querySelector('.main-img');
	++click_main_image;
	main_image_DOM.src = switch_images[click_main_image];
	if (click_main_image >= 4){
		click_main_image = 0;
		main_image_DOM.src = switch_images[click_main_image]
	}
	console.log('testies');
});


document.querySelector('.nav-menu').addEventListener('mouseover', function() {
	document.querySelector('.nav-menu').style.background = '#FF4500';
	if (document.querySelector('.nav-menu').addEventListener('onmouseout'), function(){
		document.querySelector('.nav-menu').style.background = none;
	});
});

function pclick(){
	if (document.getElementById('par-0')) {
		return 0;
	}

	else {
		return 1;
	}
}

function _switch(){
	document.querySelector('p').style.display = 'none';
	document.querySelector('form').style.display = 'inline';
}

document.querySelector('p').addEventListener('dblclick', function(){
	var place_holder = document.querySelector('p').innerHTML;
	document.querySelector('form').innerHTML = place_holder;
	console.log(place_holder);
	_switch();
});

document.getElementById('#par-' + String(pclick())).addEventListener('dblclick', function(){
	var place_holder = document.querySelector('p').innerHTML;
	document.querySelector('form').innerHTML = place_holder;
	console.log(pclick());
	console.log(place_holder);
	_switch();
});

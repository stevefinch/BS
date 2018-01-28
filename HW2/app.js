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


/* Need to figure out pclick() to keep DRY. I'm guessing I need to force type for string concatanation to be used for getElemByID param */

function pclick(){
	if (document.getElementById('par-0')) {
		return 0;
	}

	else {
		return 1;
	}
}

function _switch0(){
	document.querySelector('p').style.display = 'none';
	document.querySelector('textarea').style.display = 'inline';
	document.querySelector('button').style.display = 'inline'
}

function _switch1(){
	document.querySelector('p').style.display = 'inline';
	document.querySelector('textarea').style.display = 'none';
	document.querySelector('button').style.display = 'none'
}


document.getElementById('par-0').addEventListener('dblclick', function() {
  var place_holder = document.getElementById('par-0').innerHTML;
  console.log(place_holder);
  document.getElementById('text-0').value = place_holder;

  // console.log(pclick());
  // console.log(place_holder);
  _switch0();
});

document.getElementById('par-1').addEventListener('dblclick', function() {
  var place_holder = document.getElementById('par-1').innerHTML;
  console.log(place_holder);
  document.getElementById('text-1').value = place_holder;

  // console.log(pclick());
  // console.log(place_holder);
  _switch0();
});

document.getElementById('button-0').addEventListener('click', function() {
	var place_holder = document.getElementById('text-0').innerHTML;
	document.getElementById('par-0').innerHTML = place_holder;
	_switch1();
});

document.getElementById('button-1').addEventListener('click', function() {
	var place_holder = document.getElementById('text-1').innerHTML;
	document.getElementById('par-1').innerHTML = place_holder;
	_switch1();
});
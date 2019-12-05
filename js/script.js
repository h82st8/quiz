document.getElementById('btn11').addEventListener('click', fun1);
document.getElementById('btn22').addEventListener('click', fun2);
document.getElementById('btn33').addEventListener('click', fun3);
document.getElementById('btn44').addEventListener('click', fun4);


function fun1() {
	document.getElementById('cont1').style.display='none';
	document.getElementById('cont2').style.display='block';
}

function fun2() {
	document.getElementById('cont2').style.display='none';
	document.getElementById('cont3').style.display='block';
}

function fun3() {
	document.getElementById('cont3').style.display='none';
	document.getElementById('cont4').style.display='block';
}

function fun4() {
	document.getElementById('cont4').style.display='none';
	document.getElementById('cont5').style.display='block';
}

	document.querySelector('.choice_wrap').addEventListener('click', func);
	document.querySelector('.choice_wrap_2').addEventListener('click', func2);
	document.querySelector('.choice_wrap_3').addEventListener('click', func3);
	document.querySelector('.choice_wrap_4').addEventListener('click', func4);
// loadPlaylist();

function func(event) {
	console.log(event);

	let btn = document.getElementsByClassName('choice__item');

	if (event.target.classList[0] == 'choice__item') {

		for(let i = 0; i < btn.length; i++){
			btn[i].classList.remove('btn_active');
		}
		event.target.classList.add('btn_active');

	}

	let tagged = document.querySelector('.btn_active');
	let taggedName = tagged.value;

	let li = document.querySelector("#li");
	li.innerHTML = taggedName;
	let input = document.querySelector("#input1");
	input.value = taggedName;
	// save(taggedName);

}

function func2(event) {
	console.log(event);

	let btn = document.getElementsByClassName('choice__item');

	if (event.target.classList[0] == 'choice__item') {

		for(let i = 0; i < btn.length; i++){
			btn[i].classList.remove('btn_active');
		}
		event.target.classList.add('btn_active');

	}

	let tagged = document.querySelector('.btn_active');
	let taggedName = tagged.value;

	let li = document.querySelector("#li2");
	li.innerHTML = taggedName;
	let input = document.querySelector("#input2");
	input.value = taggedName;

	// save(taggedName);

}

function func3(event) {
	console.log(event);

	let btn = document.getElementsByClassName('choice__item');

	if (event.target.classList[0] == 'choice__item') {

		for(let i = 0; i < btn.length; i++){
			btn[i].classList.remove('btn_active');
		}
		event.target.classList.add('btn_active');

	}

	let tagged = document.querySelector('.btn_active');
	let taggedName = tagged.value;

	let li = document.querySelector("#li3");
	li.innerHTML = taggedName;
	let input = document.querySelector("#input3");
	input.value = taggedName;

	// save(taggedName);

}

function func4(event) {
	console.log(event);

	let btn = document.getElementsByClassName('choice__item');

	if (event.target.classList[0] == 'choice__item') {

		for(let i = 0; i < btn.length; i++){
			btn[i].classList.remove('btn_active');
		}
		event.target.classList.add('btn_active');

	}

	let tagged = document.querySelector('.btn_active');
	let taggedName = tagged.value;

	let li = document.querySelector("#li4");
	li.innerHTML = taggedName;
	let input = document.querySelector("#input4");
	input.value = taggedName;

	// save(taggedName);

}
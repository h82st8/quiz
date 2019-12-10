// document.getElementById('btn11').addEventListener('click', fun);
// document.getElementById('btn11').addEventListener('click', fun);
// document.getElementById('btn22').addEventListener('click', fun);
// document.getElementById('btn33').addEventListener('click', fun);
// document.getElementById('btn44').addEventListener('click', fun);


function fun(id1, id2) {
	document.getElementById(id1).style.display='none';
	document.getElementById(id2).style.display='block';
}

document.getElementById('btn00').addEventListener('click', fun("cont0", "cont1"));
document.getElementById('btn11').addEventListener('click', fun("cont1", "cont2"));
document.getElementById('btn22').addEventListener('click', fun("cont2", "cont3"));
document.getElementById('btn33').addEventListener('click', fun("cont3", "cont4"));
document.getElementById('btn44').addEventListener('click', fun("cont4", "cont5"));


// fun("cont0", "cont1");
// fun("cont1", "cont2");
// fun("cont2", "cont3");
// fun("cont3", "cont4");
// fun("cont4", "cont5");

	document.querySelector('.choice_wrap').addEventListener('click', func);
	document.querySelector('.choice_wrap_2').addEventListener('click', func2);
	document.querySelector('.choice_wrap_3').addEventListener('click', func3);
	document.querySelector('.choice_wrap_4').addEventListener('click', func4);

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
}
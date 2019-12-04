document.querySelector('.choice_wrap').addEventListener('click', func);

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

	}
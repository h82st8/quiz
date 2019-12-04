let btns = document.getElementById('btns');
btns.addEventListener('click', func);

function func(event) {
	console.log();
	if (event.target.classList[0] == 'choice__item') {
		let btn = document.getElementsByClassName('choice__item');

		for(let i = 0; i < btn.length; i++){
			btn[i].classList.remove('btn_active');
		}
		event.target.classList.add('btn_active');
	}
}
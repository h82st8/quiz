	document.querySelector('.choice_wrap').addEventListener('click', func);

	function func(event) {
		console.log(event);

	// let textInput = document.getElementById("btn1");
	// let btnName = textInput.value;

	if (event.target.classList[0] == 'choice__item') {
		let btn = document.getElementsByClassName('choice__item');

		for(let i = 0; i < btn.length; i++){
			btn[i].classList.remove('btn_active');
			// let li = document.createElement("li");
			// li.innerHTML = btnName;
			// let ul = document.getElementById("playlist");
			// ul.appendChild(li);
		}
		event.target.classList.add('btn_active');
	}
}
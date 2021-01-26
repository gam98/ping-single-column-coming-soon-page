const email = document.getElementById('email');
const btn = document.querySelector('.btn')
const expresiones = {
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}
const validarFormulario = (e) => {
	// console.log(e.target.name)
	if(e.target.name === 'correo') {
		if(expresiones.correo.test(e.target.value)){
			document.querySelector('.warning').classList.remove('warning-active')
			email.classList.remove('warning-input');
		} else {
			document.querySelector('.warning').classList.add('warning-active')
			email.classList.add('warning-input');
		}
	}
}

email.addEventListener('keyup', validarFormulario);
email.addEventListener('blur', validarFormulario);

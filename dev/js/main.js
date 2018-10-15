function validateEmail() {
	const pattern = /\w+\@(iotechnologies.com)$/;
	validationObj.mail = pattern.test(inputsObj.mail.value);
	validate(inputsObj.mail, validationObj.mail);
}

function watchPasswordField() {
	validationObj.pw = !!inputsObj.pw.value.length;
	validate(inputsObj.pw, validationObj.pw);
}

function setValidation(state) {
	for (let prop in validationObj) {
		validationObj[prop] = state;
	}
	defineState(validationObj, inputsObj);
}

function defineState(validationObject, inputsObj) {
	// for the future easier implementation of phone, address and other inputs
	for (let prop in validationObject) {
		validate(inputsObj[prop], validationObj[prop]);
	}
}

function validate(elem, state) {
	const list = elem.classList;
	if (state) {
		list.remove('invalid');
		list.add('valid');
	} else {
		list.remove('valid');
		list.add('invalid');
	}
}

function verifyUser(login, pw) {
	// If ES6 is allowed
	const usersListES6 = new Map();
	usersListES6.set('sveta@iotechnologies.com', 'qwerty');
	usersListES6.set('qwerty@iotechnologies.com', '12345');

	// If ES6 is NOT allowed
	const usersListES5 = {
		'sveta@iotechnologies.com': 'qwerty',
		'qwerty@iotechnologies.com': '12345'
	};

	currentState = usersListES6.has(login) && usersListES6.get(login) === pw ? state.access : state.login;
	if (currentState === state.access) {
		switchState(state.access);
	} else {
		setValidation(false);
		switchTooltipState(false);
	}
}

function switchState(nextState) {
	// Using a template for each given state
	constainer.innerHTML = templates[nextState].innerHTML;

	switch (nextState) {
		case state.login:
			inputsObj = {
				mail: document.querySelector('input[type="email"]'),
				pw: document.querySelector('input[type="password"]'),
				inputButton: document.querySelector('input[type="submit"]')
			};
			// Making easier to increase qnt of input fields  to validate
			Object.defineProperty(inputsObj, 'inputButton', {
				enumerable: false
			});
			const form = document.querySelector('form');
			form.addEventListener('submit', function(event) {
				event.preventDefault();
				onSubmit(form.email.value, form.pw.value);
			});
			inputsObj.mail.addEventListener('blur', function() {
				validateEmail();
			});
			inputsObj.pw.addEventListener('change', function() {
				watchPasswordField();
			});

			resetPW.addEventListener('click', function() {
				switchState(state.reset);
			});
			break;

		case state.reset:
			const backPW = document.querySelector('#backPW');
			backPW.addEventListener('click', function qq() {
				backPW.removeEventListener('click', qq);
				switchState(state.login);
			});
			break;

		case state.access:
			const name = document.querySelector('#name');
			name.innerText = 'Nikita!';
			break;
	}
}

function switchTooltipState(state) {
	const classList = document.querySelector('.bubble').classList;
	state ? classList.add('dNone') : classList.remove('dNone');
}

function onSubmit(mail, pw) {
	switchTooltipState(true);

	// Imitation of server request (as a timeout)
	const loaderClassList = document.querySelector('.loader').classList;
	loaderClassList.remove('dNone');
	setTimeout(function() {
		loaderClassList.add('dNone');
		if (mail && pw) {
			verifyUser(mail, pw);
		} else {
			switchTooltipState(true);
			setValidation(false);
		}
	}, 2000);
}

//-----------------------------------------------------------------------------------
const constainer = document.querySelector('#replace');

const state = {
	login: 'login',
	reset: 'reset',
	access: 'access'
};

const templates = {
	access: document.querySelector('#access'),
	login: document.querySelector('#login'),
	reset: document.querySelector('#reset')
};

const validationObj = {
	mail: null,
	pw: null
};

let currentState = state.login;
let inputsObj;

//-----------------------------------------------------------------------------------

// Define a default state as an entry point;
switchState(state.login);

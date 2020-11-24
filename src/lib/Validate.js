export default class Validate {
	constructor({
		inputs,
		formId,
		errorClass
	}) {
		this.inputs = inputs;
		this.$form = document.getElementById(formId);
		this.errorClass = errorClass;
		this.init();
	}

	init() {
		this.inputs = this.inputs.map(inputInfo => {
			const $error = document.createElement('label');
			$error.setAttribute('for', inputInfo.inputId);
			$error.className = this.errorClass;

			return {
				input: document.getElementById(inputInfo.inputId),
				inputId: inputInfo.inputId,
				messages: inputInfo.messages,
				validationFunc: inputInfo.validationFunc,
				isValid: false,
				$error,
				isDisplayed: false,
			};
		});

		const _this = this;
		const _onSubmitHandler = evt => _this.onSubmitHandler(evt, _onSubmitHandler);

		this.$form.addEventListener('submit', _onSubmitHandler);
	}

	get isValid() {
		const isValid = this.inputs.every(input => input.isValid);
		return isValid;
	}

	validate() {
		this.inputs.forEach(inputData => {
			const value = inputData.input.value;

			// если пустая
			if (value.trim() === '') {
				inputData.isValid = false;
				this.showRequireMessage(inputData);
				return;
			}

			const isValid = inputData.validationFunc(value);
			// если не прошла валидацию через функцию
			if (!isValid) {
				inputData.isValid = false;
				this.showFuncMessage(inputData);
				return;
			}

			// если всё прошла
			this.hideMessage(inputData);
			inputData.isValid = true;
		});
	}

	hideMessage(inputData) {
		if (inputData.isDisplayed) {
			inputData.$error.remove();
			inputData.isDisplayed = false;
		}
	}

	showRequireMessage(inputData) {
		if (inputData.isDisplayed) {
			inputData.$error.textContent = inputData.messages.require;
		} else {
			inputData.$error.textContent = inputData.messages.require;
			inputData.input.insertAdjacentElement('afterend', inputData.$error);
			inputData.isDisplayed = true;
		}
	}

	showFuncMessage(inputData) {
		if (inputData.isDisplayed) {
			inputData.$error.textContent = inputData.messages.func;
		} else {
			inputData.$error.textContent = inputData.messages.func;
			inputData.input.insertAdjacentElement('afterend', inputData.$error);
			inputData.isDisplayed = true;
		}
	}

	onSubmitHandler(evt, _onSubmitHandler) {
		evt.preventDefault();
		this.validate();
		this.$form.addEventListener('input', this.onInputHandler.bind(this));
		this.$form.removeEventListener('submit', _onSubmitHandler);
	}

	onInputHandler(evt) {
		evt.preventDefault();
		this.validate();
	}
}

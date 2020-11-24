import SendForm from '@/lib/SendForm';
import Validate from '@/lib/Validate';

const subscribe = () => {
	const validation = new Validate({
		formId: 'subscribe-form',
		inputs: [
			{
				inputId: 'subscribe-form-email',
				messages: {
					require: 'Данное поле должно быть заполнено',
					func: 'Введите корректный email адресс',
				},
				validationFunc(value) {
					// eslint-disable-next-line no-useless-escape
					const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(value);
					return isEmail;
				}
			}
		],
		errorClass: 'invalid-input'
	});



	const submit = function(evt) {
		evt.preventDefault();

		if (validation.isValid === false) return;

		const formData = new FormData(this.form);
		const post = fetch('./assets/php/send.php', {
			method: 'POST',
			body: formData
		}).catch(err => console.error(err));

	};


	const sendForm = new SendForm({
		formId: 'subscribe-form',
		submit,
	});


	sendForm.init();
};

export default subscribe;

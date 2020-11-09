import SendForm from '@/lib/SendForm';

const subscribe = () => {
	const submit = function(evt) {
		evt.preventDefault();
		const formData = new FormData(this.form);
		const body = {};
		formData.forEach((val, key) => body[key] = val);
		console.log('body: ', body);
	};


	const sendForm = new SendForm({
		formId: 'subscribe-form',
		submit,
	});

	sendForm.init();
};

export default subscribe;

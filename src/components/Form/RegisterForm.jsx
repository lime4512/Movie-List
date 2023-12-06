export const RegisterForm = () => {
	return (
		<form>
			<h1>Регистрация</h1>
			<input type='text' name='' id='' placeholder='Имя пользователя' />
			<input type='mail' name='' id='' placeholder='Почта' />
			<input type='password' name='' id='' placeholder='Пароль' />
			<button>Отправить</button>

			<div className='login-error'>Ошибка</div>
		</form>
	)
}

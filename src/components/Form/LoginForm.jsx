import Link from 'next/link'
import '@/style/LoginForm.scss'
export const LoginForm = () => {
	return (
		<form>
			<h1>Авторизация</h1>

			<input type='mail' name='' id='' placeholder='Почта' />
			<input type='password' name='' id='' placeholder='Пароль' />
			<button>Отправить</button>
			<Link href='/register'>Регистрация</Link>
			<div className='login-error'>Ошибка</div>
		</form>
	)
}

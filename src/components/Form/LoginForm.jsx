import Link from 'next/link'
import { useState } from 'react'
import '@/style/loginForm.scss'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
export const LoginForm = () => {
	const [mail, setMail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const router = useRouter()
	const handelSubmit = async event => {
		event.preventDefault()

		if (!mail || !password) {
			setError('Заполните все поля!!!!')
		}

		try {
			const res = await signIn('credentials', {
				mail,
				password,
				redirect: false,
			})

			if (res.error) {
				setError('Не правильный mail или пароль')
				return
			}

			router.push('/')
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<div className='loginForm-container'>
			<form onSubmit={handelSubmit}>
				<h1 className='loginForm-title'>Авторизация</h1>

				<input
					type='mail'
					name=''
					id=''
					placeholder='Почта'
					onChange={e => setMail(e.target.value)}
					className='loginForm-inp'
				/>
				<input
					type='password'
					name=''
					id=''
					placeholder='Пароль'
					onChange={e => setPassword(e.target.value)}
					className='loginForm-inp'
				/>
				<button className='loginForm-btn'>Отправить</button>
				<Link href='/register' className='loginForm-link'>
					Регистрация
				</Link>
				{error && <div className='login-error'>{error}</div>}
			</form>
		</div>
	)
}

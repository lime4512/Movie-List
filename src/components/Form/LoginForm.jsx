import Link from 'next/link'
import { useState } from 'react'
import '@/style/LoginForm.scss'
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

			router.push('/login')
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<form onSubmit={handelSubmit}>
			<h1>Авторизация</h1>

			<input
				type='mail'
				name=''
				id=''
				placeholder='Почта'
				onChange={e => setMail(e.target.value)}
			/>
			<input
				type='password'
				name=''
				id=''
				placeholder='Пароль'
				onChange={e => setPassword(e.target.value)}
			/>
			<button>Отправить</button>
			<Link href='/register'>Регистрация</Link>
			{error && <div className='login-error'>{error}</div>}
		</form>
	)
}

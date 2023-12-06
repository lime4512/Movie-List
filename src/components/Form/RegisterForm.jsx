import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
export const RegisterForm = () => {
	const [name, setName] = useState('')
	const [mail, setMail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const router = useRouter()
	const handelName = event => {
		setName(event.target.value)
	}

	const handelMail = event => {
		setMail(event.target.value)
	}

	const handelPassword = event => {
		setPassword(event.target.value)
	}

	const handleSubmit = async event => {
		event.preventDefault()

		if (!name || !mail || !password) {
			setError('Заполните все поля!!!!')
		}

		try {
			const res = await fetch('api/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name,
					mail,
					password,
				}),
			})

			if (res.ok) {
				const form = event.target
				form.reset()
				setError('')
				router.push('/')
			} else {
				setError('Не правильные данные введены ')
				console.log('Регистрация пользователя невозможна ')
			}
		} catch (error) {
			console.log(error)
			console.log('При Регистрации произошла ошибка')
		}
	}

	return (
		<div className='register-content'>
			<h1>Регистрация</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name=''
					id=''
					placeholder='Имя пользователя'
					onChange={handelName}
				/>
				<input
					type='mail'
					name=''
					id=''
					placeholder='Почта'
					onChange={handelMail}
				/>
				<input
					type='password'
					name=''
					id=''
					placeholder='Пароль'
					onChange={handelPassword}
				/>
				<button>Отправить</button>
			</form>
			<Link href='/register'>Логин</Link>
			{error && <div className='login-error'>{error}</div>}
		</div>
	)
}

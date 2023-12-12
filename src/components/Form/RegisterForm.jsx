import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import '@/style/RegisterForm.scss'
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
			<form onSubmit={handleSubmit}>
				<h1 className='register-title'>Регистрация</h1>
				<input
					type='text'
					name=''
					id=''
					placeholder='Имя пользователя'
					onChange={handelName}
					className='register-inp'
				/>
				<input
					type='mail'
					name=''
					id=''
					placeholder='Почта'
					onChange={handelMail}
					className='register-inp'
				/>
				<input
					type='password'
					name=''
					id=''
					placeholder='Пароль'
					onChange={handelPassword}
					className='register-inp'
				/>
				<button className='register-btn'>Отправить</button>
				<Link href='/login' className='register-link'>
					Логин
				</Link>
				{error && <div className='login-error'>{error}</div>}
			</form>
		</div>
	)
}

import { NextResponse } from 'next/server'

export async function POST(req) {
	try {
		const { name, mail, password } = await req.json()
		console.log(name + mail + password)

		return NextResponse.json(
			{ message: 'Пользователь успешно зарегистрирован' },
			{ status: 201 }
		)
	} catch (error) {
		return NextResponse.json({ message: 'Ошибка регистрации' }, { status: 500 })
	}
}

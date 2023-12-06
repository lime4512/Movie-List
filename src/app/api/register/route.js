import { connectMongoDB } from '@/lib/mongodb'
import User from '../../../../models/user'
import { NextResponse } from 'next/server'

import bcrypt from 'bcryptjs'

export async function POST(req) {
	try {
		const { name, mail, password } = await req.json()
		const hashedPassword = await bcrypt.hash(password, 10)
		await connectMongoDB()
		await User.create({ name, mail, password: hashedPassword })

		return NextResponse.json(
			{ message: 'Пользователь успешно зарегистрирован' },
			{ status: 201 }
		)
	} catch (error) {
		return NextResponse.json({ message: 'Ошибка регистрации' }, { status: 500 })
	}
}

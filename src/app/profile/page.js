'use client'
import { Container } from '@/components/container/Container'
import { useSession } from 'next-auth/react'

export default function Profile() {
	const { data: session } = useSession()
	return (
		<Container>
			<h1>Профиль</h1>
			<h1>Имя: {session?.user?.name}</h1>
		</Container>
	)
}

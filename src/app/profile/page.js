'use client'
import { Container } from '@/components/container/Container'
import { useSession } from 'next-auth/react'
import { ProfileInfo } from '@/components/profileInfo/ProfileInfo'
export default function Profile() {
	const { data: session } = useSession()
	return (
		<Container>
			<ProfileInfo name={session?.user?.name} />
		</Container>
	)
}

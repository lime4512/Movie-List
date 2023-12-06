import { connectMongoDB } from '@/lib/mongodb'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import User from '../../../../../models/user'
import bcrypt from 'bcryptjs'
const authOptions = {
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {},

			async authorize(credentials) {
				const { mail, password } = credentials

				try {
					await connectMongoDB()
					const user = await User.findOne({ mail })

					if (!user) {
						return null
					}

					const passwordBool = await bcrypt.compare(password, user.password)

					if (!passwordBool) {
						return null
					}
					return user
				} catch (error) {
					console.log(error)
				}
				return user
			},
		}),
	],
	session: {
		strategy: 'jwt',
	},
	secret: process.env.NEXT_SECRET_AUTH,

	pages: {
		signIn: '/login',
	},
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }

import GoggleProvider from 'next-auth/providers/google'
export const authConfig = {
	providers: [
		GoggleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_GOOGLE_CLIENT_SECRET,
		}),
	],
}

import { Header } from '@/components/header/Header'
import './globals.scss'
import { Footer } from '@/components/footer/Footer'
import AuthProvider from '@/app/Providers'
export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body suppressHydrationWarning={true}>
				<AuthProvider>
					<Header />
					{children}
					<Footer />
				</AuthProvider>
			</body>
		</html>
	)
}

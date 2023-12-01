import { Header } from '@/components/header/Header'
import './globals.scss'
import { Footer } from '@/components/footer/Footer'

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body suppressHydrationWarning={true}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}

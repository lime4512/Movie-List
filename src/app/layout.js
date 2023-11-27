import { Header } from '@/components/header/Header'
import './globals.scss'

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body suppressHydrationWarning={true}>
				<Header />
				{children}
			</body>
		</html>
	)
}

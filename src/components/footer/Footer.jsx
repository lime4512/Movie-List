import '../../style/footer.scss'
import Link from 'next/link'
export const Footer = () => {
	return (
		<footer>
			<div className='footer-logo'>
				<Link href='/'>
					MOVIE<span>LIST</span>
				</Link>
			</div>
			<p>Разработчик Круглов Александр</p>
			<ul className='footer-nav'>
				<li>
					<a href='https://github.com/lime4512'>GitHub</a>
				</li>
				<li>
					<a href='#'>Telegram</a>
				</li>
			</ul>
		</footer>
	)
}

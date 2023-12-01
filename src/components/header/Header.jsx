import '../../style/header.scss'
import Link from 'next/link'
export const Header = () => {
	return (
		<header>
			<div className='header-logo'>
				<Link href='/'>
					MOVIE<span>LIST</span>
				</Link>
			</div>
			<ul className='header-nav'>
				<li className='nav-link'>
					<Link href='/'>Дом</Link>
				</li>
				<li className='header-dash'>|</li>
				<li className='nav-link'>
					<Link href='/movie'>Фильмы</Link>
				</li>
				<li className='header-dash'>|</li>
				<li className='nav-link'>
					<Link href='/serials'>Сериалы</Link>
				</li>
				<li className='header-dash'>|</li>
				<li className='nav-link'>
					<Link href='/release'>Релизы</Link>
				</li>
				<li className='header-dash'>|</li>
				<li className='nav-link'>
					<Link href='/premieres'>Кинопремьеры</Link>
				</li>
			</ul>

			<div className='header-login'>
				<Link href='/search' className='header-btn'>
					Поиск
				</Link>
				<button className='header-btn'>Вход</button>
			</div>
		</header>
	)
}

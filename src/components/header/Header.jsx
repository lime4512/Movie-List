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
					<a href=''>Дом</a>
				</li>
				<li className='header-dash'>|</li>
				<li className='nav-link'>
					<a href=''>Фильмы</a>
				</li>
				<li className='header-dash'>|</li>
				<li className='nav-link'>
					<a href=''>Сериалы</a>
				</li>
				<li className='header-dash'>|</li>
				<li className='nav-link'>
					<a href=''>Релизы</a>
				</li>
				<li className='header-dash'>|</li>
				<li className='nav-link'>
					<a href=''>Кинопремьеры</a>
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

import '../../style/header.scss'
export const Header = () => {
	return (
		<header>
			<div className='header-logo'>
				MOVIE<span>LIST</span>
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
					<a href=''>Трейлеры</a>
				</li>
				<li className='header-dash'>|</li>
				<li className='nav-link'>
					<a href=''>Случайный фильм</a>
				</li>
			</ul>

			<div className='header-login'>
				<input type='text' className='header-inp' />
				<button className='header-btn'>Вход</button>
			</div>
		</header>
	)
}

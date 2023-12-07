'use client'
import { signOut, useSession } from 'next-auth/react'
import '../../style/header.scss'
import Link from 'next/link'

export const Header = () => {
	const ses = useSession()
	console.log(ses)
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
				<li className='nav-link'>
					<Link href='/search'>Поиск</Link>
				</li>
			</ul>
			<div className='header-login'>
				{ses.data == undefined ? (
					<Link href='/login'>
						<button className='header-btn'>Вход</button>
					</Link>
				) : (
					<div className='sing-content'>
						<Link href='/profile' className='nav-link profile'>
							Профиль
						</Link>

						<Link
							href='#'
							onClick={() => {
								signOut()
							}}
						>
							<button className='header-btn'>Выход</button>
						</Link>
					</div>
				)}
			</div>
		</header>
	)
}

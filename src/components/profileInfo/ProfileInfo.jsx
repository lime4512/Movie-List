import '@/style/profileInfo.scss'
import Image from 'next/image'
export const ProfileInfo = ({ name }) => {
	return (
		<div className='container-profile'>
			<h1 className='title-profile'>Профиль пользователя</h1>
			<div className='content-profile'>
				<div className='img-profile'>
					<Image src='/pngwing.png' width={200} height={200} alt='img' />
				</div>
				<div className='text-profile'>
					<h2 className='str-profile'>
						<span>Имя:</span> {name}
					</h2>
					<h2 className='str-profile'>
						<span>Почта:</span> test@test
					</h2>
					<h2 className='str-profile'>
						<span>Телефон:</span> +797823254234
					</h2>
					<h2 className='str-profile'>
						<span>Контактные данные</span> @test, test
					</h2>
				</div>
			</div>
		</div>
	)
}

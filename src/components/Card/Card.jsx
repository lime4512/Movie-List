import '../../style/card.scss'
import Image from 'next/image'
export const Card = ({ title, img, ratingImdb }) => {
	return (
		<div className='card-container'>
			<div className='card-img'>
				<Image
					loader={() => `${img}`}
					src={img}
					alt='Img'
					fill={true}
					className='imgTotal-card'
				/>
			</div>
			<div className='card-content'>
				<h2 className='card-title'>{title}</h2>
				<p className='card-rating'>{ratingImdb} Рейтинг</p>
			</div>
		</div>
	)
}

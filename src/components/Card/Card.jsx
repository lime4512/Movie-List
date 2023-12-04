import '../../style/card.scss'
import Link from 'next/link'
import Image from 'next/image'
export const Card = ({ titleRu, titleEn, img, ratingImdb, id }) => {
	return (
		<Link href={`/film/${id}`}>
			<div className='card-container'>
				<div className='card-img'>
					<Image
						loader={() => `${img}`}
						src={img}
						alt='Img'
						fill={true}
						unoptimized={true}
						className='imgTotal-card'
					/>
				</div>
				<div className='card-content'>
					<h2 className='card-title'>
						{titleRu == undefined ? titleEn : titleRu}
					</h2>
					{ratingImdb == undefined ? (
						<></>
					) : (
						<p className='card-rating'>
							{ratingImdb == 'null' ? 'Рейтинга нет' : `${ratingImdb} Рейтинг`}
						</p>
					)}
				</div>
			</div>
		</Link>
	)
}

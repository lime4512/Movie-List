import '../../style/card.scss'
import Link from 'next/link'
import Image from 'next/image'
export const Card = ({ titleRu, titleEn, img, ratingImdb, id, year }) => {
	return (
		<Link href={`/film/${id}`} className='card-pos'>
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
					<h3 className='card-year'>{year}</h3>
					{ratingImdb && (
						<div className='card-rating'>
							<Image src='/im.svg' width={30} height={17} alt='img' />
							<p className='card-rating-num'>
								{ratingImdb == 'null' ? 'Рейтинга нет' : `${ratingImdb}`}
							</p>
						</div>
					)}
				</div>
			</div>
		</Link>
	)
}

import { Card } from '../Card/Card'
import '@/style/similars.scss'
export const Similar = ({ sim }) => {
	console.log(sim)
	return (
		<div className='similar-container'>
			<h1 className='similar-title'>Похожие фильмы:</h1>
			<div className='similar-content'>
				<ul className='similar-content'>
					{sim.length == 0 ? (
						<li>
							<h1 className='similar-title'>Похожие фильмы не найдены</h1>
						</li>
					) : (
						sim.map(item => (
							<li key={Math.random()} className='similar-item '>
								<Card
									titleRu={item.nameRu}
									titleEn={item.nameEn}
									img={item.posterUrlPreview}
									id={item.filmId}
								/>
							</li>
						))
					)}
				</ul>
			</div>
		</div>
	)
}

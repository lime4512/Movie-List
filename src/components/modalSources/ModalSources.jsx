import { useEffect, useState } from 'react'
import '@/style/modalSources.scss'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Link from 'next/link'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
	backgroundColor: 'black',
}
export const ModalSources = ({ id }) => {
	const [sources, setSources] = useState([])
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	useEffect(() => {
		const MovieSources = async () => {
			fetch(
				`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/external_sources?page=1`,
				{
					headers: {
						'Content-Type': 'application/json',
						'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY,
					},
				}
			)
				.then(res => res.json())
				.then(data => setSources(data.items))
				.catch(err => console.log(err))
		}

		MovieSources()
	}, [id])
	return (
		<>
			<button className='btn-Sources' onClick={handleOpen}>
				Просмотр фильма
			</button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<Typography id='modal-modal-title' variant='h6' component='h2'>
						<h1 className='title-sources'>Сайты для просмотра фильмов</h1>
					</Typography>
					<Typography
						id='modal-modal-description'
						sx={{ mt: 2 }}
						component={'span'}
						variant={'body2'}
					>
						<ul>
							{sources.length == 0 ? (
								<li className='sources-item'>Сайты не найдены</li>
							) : (
								sources.map(item => (
									<li key={Math.random()} className='sources-item'>
										<Link href={item.url}>{item.platform}</Link>
									</li>
								))
							)}
						</ul>
					</Typography>
				</Box>
			</Modal>
		</>
	)
}

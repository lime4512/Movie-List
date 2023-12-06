import mongoose from 'mongoose'

export const connectMongoDB = async () => {
	try {
		await mongoose.connect(process.env.URL_MONGODB)
		console.log('Подключение к MongoDB')
	} catch (err) {
		console.log(err)
		console.log('Ошибка подключения к MongoDB')
	}
}

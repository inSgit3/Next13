import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('MongoDB connected successfully!')
    } catch (error) {
        console.error('MongoDB is not connected :(', error)
    }
}
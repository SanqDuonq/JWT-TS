import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MongoURI as string)
        console.log(`Connected database successful: ${connect.connection.host}`)
    } catch (error) {
        console.log(`Connected database fail: ${error}`)
        process.exit(1)
    }   
}
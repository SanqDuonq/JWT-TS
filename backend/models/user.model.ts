import mongoose, { Schema } from 'mongoose'
import { IUser } from '../interfaces/user.interface'

const userSchema:Schema<IUser> = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    admin: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

const User = mongoose.model('User',userSchema)

export default User;
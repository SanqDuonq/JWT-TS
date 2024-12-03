import {Request,Response} from 'express'
import bcrypt from 'bcrypt'
import { userZodSchema } from '../utils/validate';
import User from '../models/user.model';
import { z } from 'zod';

async function signup(req:Request,res:Response) {
    try {
        const validateInput = userZodSchema.parse(req.body)
        const hashPassword = await bcrypt.hash(validateInput.password,10)

        const newUser = new User({
            username: validateInput.username,
            password: hashPassword,
            email: validateInput.email,
        })

        await newUser.save();
        res.status(201).json({
            message: 'Created user successful'
        })
    } catch (error) {
        if (error instanceof z.ZodError) {
            const errorMessage = error.errors.map(data => data.message)
            res.status(400).json({
                errors: errorMessage
            })
        }
        res.status(500).json({
            message: 'Server error'
        })
    }
}

async function login(req:Request,res:Response) {

}

async function logout(req:Request,res:Response) {

}


export const authController = {
    signup,
    login
}
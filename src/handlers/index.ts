import type { Request, Response } from "express"
import User from "../models/User"
import { hashPassword } from "../utils/auth"

export const createAccount = async (req: Request, res: Response) => {

    const { email, password } = req.body

    const userExists = await User.findOne({email})
    
    if(userExists) {
        const err = new Error('El usuario ya esta registrado')
        res.status(409).json({error : err.message})
        return
    } 

    const user = new User(req.body)
    user.password = await hashPassword(password)
    
    await user.save()
    res.status(201).send('Registrado correctamente')
    
}
import dbConnect from "../../../lib/dbConnect";
import User from '../../../models/user';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const saltRounds = 10;

export default async function Handler(req, res) {
    const {email, password, password2} = req.body;
    const {method} = req;
    const errors = [];
    await dbConnect()

    switch (method) {
        case 'POST':
            let status
            let message = {}
            try {
                if(!email || !password || !password2) {
                    errors.push({message: 'Please fill out all of the fields.'})
                    return res.status(422).json({message: 'Please fill out all of the fields.'})
                }
                if(password !== password2) {
                    errors.push({message: 'Passwords must match.'})
                    return res.status(422).json({message: 'Passwords must match.'})
                }
                if(password.length < 6) {
                    errors.push({message: 'Password must be at least 6 characters long.'})
                    return res.status(422).json({message: 'Password must be at least 6 characters long.'})
                }
                const exists = await User.findOne({email: email});
                if(exists) {
                    return res.status(409).json({message: `${email} is already registered`})
                }
                if(!exists) {
                    const newUser = new User({
                        email,
                        password
                    })
                    bcrypt.hash(newUser.password, saltRounds, (error, hash) => {
                        if(error) {
                            throw error
                        }
                        newUser.password = hash;
                        newUser.save()
                    })
                    return res.status(201).json({message: 'User created successfully'})
                }
            } catch (error) {
                console.log(error);
                return res.status(500).json({message: 'Something went wrong'})
            }
            
            break;
        default:
            res.status(400).json({success: false})
            break;
    }





}
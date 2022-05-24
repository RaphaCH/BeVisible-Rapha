import dbConnect from "../../../lib/dbConnect";
import User from '../../../models/user';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nookies from 'nookies';
import cookie from 'cookie';

const KEY = process.env.KEY;

//TO DO! Only "DONE" part is cookie deletion
export default async function Handler(req, res) {
    const {email, password} = req.body;
    const {method} = req;
    await dbConnect()

    switch (method) {
        case 'POST':
            try {
                const exists = await User.findOne({email: email});
                if(!exists) {
                    return res.status(403).json({message: `${email} is not registered`})
                }
                if(exists) {
                    const isMatch = await bcrypt.compare(password, exists.password);
                        if(isMatch) {
                            const payload = {
                                id: exists._id,
                                email: exists.email,
                                createdAt: exists.createdAt,
                                permissions: exists.permissions
                              };
                            const token = await jwt.sign(payload, KEY,{expiresIn: 3600});
                            if(!token) {
                                return res.status(500).json({message: 'Something wrong did not go right'})
                            } 
                            res.setHeader('Set-Cookie', cookie.serialize('beVisible.token', '', {
                                httpOnly: true,
                                secure: process.env.NODE_ENV !== 'development',
                                expires: new Date(0),
                                sameSite: 'strict',
                                path: '/'
                            }))
                            return res.status(200).json({token, payload})
                        } else {
                            return res.status(403).json({message: `Password is incorrect`})
                        }
                }
            } catch (error) {
                console.log(error);
                res.status(500).json({message: 'Someone gone and fucked the entire shit up'})
            }
            break;
        default:
            res.status(400).json({success: false})
            break;
    }





}
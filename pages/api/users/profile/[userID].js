import dbConnect from "../../../../lib/dbConnect";
import User from '../../../../models/user';
import Profile from '../../../../models/profile';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const KEY = process.env.KEY;

export default async function handler(req,res) {
    console.log('yo');
    const {userID} = req.query;
    console.log(userID);
    

    res.json({message: `user ID is ${userID}`});
}
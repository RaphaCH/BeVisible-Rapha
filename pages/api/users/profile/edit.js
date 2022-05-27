import cookie from "cookie";
import jwt from "jsonwebtoken";

import dbConnect from "../../../../lib/dbConnect";
import User from "../../../../models/user";
import Profile from "../../../../models/profile";

export default async function Handler(req,res) {
  const {method}  = req;
  const {visibleBackend: token} = cookie.parse(req.headers.cookie || '');
  const {id} = jwt.verify(token, process.env.KEY);


  switch (method) {
    case 'PUT':
      try {
        const exists = await Profile.findOne({user: id});
        if(!exists) {
          return res.status(404).json({message: `Couldn't find profile`})
        }
        const profile = await Profile.findOneAndUpdate({user: id}, req.body, {new: true});
        return res.status(200).json({profile})
      } catch {
        return res.status(500).json({message: 'Something went wrong'})
      }
      break;
    default:
      res.status(400).json({success: false})
      break;
  }
}
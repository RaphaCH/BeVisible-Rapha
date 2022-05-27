import dbConnect from "../../../../lib/dbConnect";
import User from "../../../../models/user";
import Profile from "../../../../models/profile";
import cookie from 'cookie';
import jwt from 'jsonwebtoken';


export default async function Handler(req, res) {
  const {method} = req;
  const {firstName, lastName, jobTitle, email, telephone, aboutMe, pastExperiences} = req.body;
  console.log(firstName);
  const {visibleBackend: token} = cookie.parse(req.headers.cookie || '');
  const {id} = jwt.verify(token, process.env.KEY);

  await dbConnect();

  switch (method) {
    case 'POST':
      try {
        const exists = await Profile.findOne({user: id});
        if(exists) {
          return res.status(409).json({message: `Profile already exists`})
        }
        const profile = new Profile({
          user: id,
          firstName: firstName,
          lastName: lastName,
          jobTitle: jobTitle,
          email: email,
          telephone: telephone,
          aboutMe: aboutMe,
          pastExperiences: pastExperiences,
        });
        profile.save();
        return res.status(200).json({profile})
      } catch (error) {
        return res.status(500).json({message: 'Something went wrong'})
      }
      break;
      default:
        res.status(400).json({success: false})
        break;
  }




}
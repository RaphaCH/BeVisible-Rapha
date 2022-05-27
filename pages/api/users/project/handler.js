import dbConnect from '../../../../lib/dbConnect';
import User from '../../../../models/user';
import Project from '../../../../models/projects';
import Profile from '../../../../models/profile';

import cookie from 'cookie';
import jwt from 'jsonwebtoken';

export default async function Handler(req,res) {
  const {method} = req;
  const {visibleBackend: token} = cookie.parse(req.headers.cookie || '');
  const {id} = jwt.verify(token, process.env.KEY);

  switch (method) {
    case 'POST':
      try {
        const userProfile = await Profile.findOne({user: id});
        if(!userProfile) {
          return res.status(404).json({message: 'User profile not found'});
        } else {
          const newProject = new Project({
            title: req.body.title,
            description: req.body.description,
            // photo: req.body.photo,
            link: req.body.link,
            profile: userProfile._id,
          })
          newProject.save();
          userProfile.projects.push(newProject._id);
          userProfile.save();
          return res.status(200).json({newProject});
        }
      } catch (error) {
        return res.status(500).json({message: 'Something went wrong'})
      }
      
      break;
  
    default:
      res.status(400).json({success: false})
      break;
  }
}

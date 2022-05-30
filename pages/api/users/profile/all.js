import dbConnect from "../../../../lib/dbConnect";
import Profile from '../../../../models/profile';

export default async function handler(req, res) {
  const {method} = req;


  switch (method) {
    case 'GET':
      try {
        const profiles = Profile.find({});
        res.status(200).json(profiles);
      } catch (error) {
        res.status(500).json({message: error.message});
      }
      break;
  
    default:
      res.status(500).json({message: 'Something went wrong'});
      break;
  }

}
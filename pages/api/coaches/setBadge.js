import dbConnect from '../../../lib/dbConnect';
import Profile from '../../../models/profile';


export default async function Handler(req,res) {
  const {method} = req;
  const {badgeId, profileId} = req.body;
  console.log(badgeId, profileId );

  switch (method) {
    case 'POST':
      try {
        let correctIndex
        const userProfile = await Profile.findById({_id: profileId})
        for(let i = 0; i < userProfile.badges.length; i++){
          // userProfile.badges[i]._id
          if(userProfile.badges[i]._id == badgeId){
            correctIndex = i
          }
        }
        userProfile.badges[correctIndex].isActive = !userProfile.badges[correctIndex].isActive;
        await userProfile.save();
        console.log(correctIndex)
        console.log(userProfile.badges[correctIndex]);
        res.status(200).json(userProfile);
      } catch (error) {
        console.log(error)
      }
      break;
  
    default:
      res.status(500).json({message: 'Something wrong didn\'t go right'});
      break;
  }
}
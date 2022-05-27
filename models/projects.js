import mongoose from 'mongoose';



const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    photo: String,
    link: String,
    profile_id: {
      type:  mongoose.Schema.Types.ObjectId,
      ref: 'Profile'
    }
})


export default mongoose.models.Project || mongoose.model('Project', projectSchema);
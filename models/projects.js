import mongoose from 'mongoose';
const Schema = mongoose.Schema;



const projectSchema = new Schema({
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
import mongoose, { Schema } from 'mongoose'


const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    photo: String,
    link: String,
    profile_id: {
      type:  Schema.Types.ObjectId,
      ref: 'Profile'
    }
})


module.exports = mongoose.model.projectSchema || mongoose.model('Project', projectSchema);
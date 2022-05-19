import mongoose from 'mongoose'



const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    isCoach: {
        type: Boolean,
        default: false,
    },
    isLearner: {
        type: Boolean,
        default: true,
    },
    isCompany: {
        type: Boolean,
        default: false,
    },
    permissions: {
        type: String,
        default: 'learner'
    },
    promotion: {type: mongoose.Schema.Types.ObjectId, ref: 'Promotion'},
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.models.userSchema || mongoose.model('User', userSchema);
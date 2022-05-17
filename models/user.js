import mongoose, { mongo, Schema } from 'mongoose'
import { boolean } from 'webidl-conversions'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
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
    promotion: {type: Schema.Types.ObjectId, ref: 'Promotion'},
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model.userSchema || mongoose.model('User', userSchema);
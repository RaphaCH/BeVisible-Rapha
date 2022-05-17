import mongoose, { Schema } from 'mongoose'


const profileSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    jobTitle: String,
    email: String,
    telephone: Number,
    projects: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Project'
        }
    ],
    aboutMe: String,
    pastExperiences: String,
    badges: [
        {
            name: {
                type: String,
                default: 'faJsSquare'
            },
            isActive: {
                type: Boolean,
                default: false
            }
        },
        {
            name: {
                type: String,
                default: 'faPython'
            },
            isActive: {
                type: Boolean,
                default: false
            }
        }, {
            name: {
                type: String,
                default: 'faHtml5'
            },
            isActive: {
                type: Boolean,
                default: false
            }
        }, {
            name: {
                type: String,
                default: 'faCss3'
            },
            isActive: {
                type: Boolean,
                default: false
            }
        }, {
            name: {
                type: String,
                default: 'faNodeJs'
            },
            isActive: {
                type: Boolean,
                default: false
            }
        }, {
            name: {
                type: String,
                default: 'faReact'
            },
            isActive: {
                type: Boolean,
                default: false
            }
        }, {
            name: {
                type: String,
                default: 'faVuejs'
            },
            isActive: {
                type: Boolean,
                default: false
            }
        }, {
            name: {
                type: String,
                default: 'faAngular'
            },
            isActive: {
                type: Boolean,
                default: false
            }
        }, {
            name: {
                type: String,
                default: 'faFigma'
            },
            isActive: {
                type: Boolean,
                default: false
            }
        },
    ]
})

module.exports = mongoose.model.profileSchema || mongoose.model('Profile', profileSchema);
import mongoose from 'mongoose';


const profileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
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
    image: String,
    jobTitle: String,
    email: String,
    telephone: Number,
    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
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

export default mongoose.models.Profile || mongoose.model('Profile', profileSchema);
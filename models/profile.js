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
    badges: {
        type: [{
            name: String,
            isActive: Boolean
        }],
        default: [
            {
                name: "fa-brands fa-js-square",
                isActive: true,
            },
            {
                name: 'fa-brands fa-python',
                isActive: false,
            },
            {
                name: 'fa-brands fa-html5',
                isActive: false,
            },
            {
                name: 'fa-brands fa-css3',
                isActive: false,
            },
            {
                name: 'fa-brands fa-node-js',
                isActive: false,
            },
            {
                name: 'fa-brands fa-react',
                isActive: false,
            },
            {
                name: 'fa-brands fa-vuejs',
                isActive: false,
            },
            {
                name: 'fa-brands fa-angular',
                isActive: false,
            },
            {
                name: 'fa-brands fa-figma',
                isActive: false,
            }
        ]
    }  
})

export default mongoose.models.Profile || mongoose.model('Profile', profileSchema);
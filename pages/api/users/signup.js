import dbConnect from "../../../lib/dbConnect";
import User from '../../../models/user';



export default async function Handler(req, res) {
    console.log('hello from fetch');
    const {email, password, password2} = req.body;
    const {method} = req;
    const errors = [];
    await dbConnect()

    switch (method) {
        case 'POST':
            let status
            let message = {}
            try {
                if(!email || !password || !password2) {
                    errors.push({message: 'Please fill out all of the fields.'})
                    return res.status(422).json({message: 'Please fill out all of the fields.'})
                }
                if(password !== password2) {
                    errors.push({message: 'Passwords must match.'})
                    return res.status(422).json({message: 'Passwords must match.'})
                }
                if(password.length < 6) {
                    errors.push({message: 'Password must be at least 6 characters long.'})
                    return res.status(422).json({message: 'Password must be at least 6 characters long.'})
                }
                console.log('here');
                const exists = await User.findOne({email: email});
                if(exists) {
                    return res.status(409).send({message: `${email} is already registered`});
                }
                if(!exists) {
                    const newUser = new User({
                        email,
                        password
                    })
                    newUser.save()
                    return res.status(201);
                }
            } catch (error) {
                console.log(error);
            }
            
            break;
    
        default:
            res.status(400).json({success: false})
            break;
    }





}
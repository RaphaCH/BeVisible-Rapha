import dbConnect from "../../../lib/dbConnect";
import User from '../../../models/user';



export default async function Handler(req, res) {
    const {email, password} = req.body;
    const {method} = req;
    await dbConnect()

    switch (method) {
        case 'POST':
            try {
                const exists = await User.findOne({email: email});
                if(!exists) {
                    return res.status(403).send({message: `${email} is not registered`});
                }
                if(exists) {
                    if(password !== exists.password) {
                        return res.status(403).send({message: `Password is incorrect`});
                    } 
                    return res.status(200).json(exists);
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
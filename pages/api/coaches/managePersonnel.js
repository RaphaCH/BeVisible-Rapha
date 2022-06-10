import dbConnect from "../../../lib/dbConnect";
import User from '../../../models/user';
import bcrypt from 'bcryptjs';

const saltRounds = 10;

export default async function Handler(req, res) {
  const {method} = req;
  const {form, coach, company} = req.body;
  console.log(form, coach, company);

  await dbConnect();

  switch (method) {
    case 'POST':
      if(!form.email || !form.password || !form.password2) {
        return res.status(422).json({message: 'Please fill out all of the fields.'});
      }
      if(form.password !== form.password2) {
        return res.status(422).json({message: 'Passwords must match.'});
      }
      if(form.password.length < 6) {
        return res.status(422).json({message: 'Password must be at least 6 characters long.'});
      }
      const userExists = await User.findOne({email: form.email});
      if(userExists) {
        return res.status(409).json({message: `${form.email} is already registered`});
      }
      if(!userExists) {
        const newUser = new User({
          email: form.email,
          password: form.password,
          isLearner: false,
          isCoach: coach,
          isCompany: company,
          permissions: coach ? 'coach' : 'company',
        })
        bcrypt.hash(newUser.password, saltRounds, (error, hash) => {
          if(error) {
            throw error;
          }
          newUser.password = hash;
          newUser.save();
        })
        return res.status(201).json({message: 'User created successfully'});
      }
      break;
    default:
      res.status(400).json({message: 'Bad Request'});
      break;
  }

}
import dbConnect from "../lib/dbConnect";
import {v4 as uuid, validate as uuidValidate} from 'uuid'



export async function signInRequest(data) {
    const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    if(response.status !== 200) {
        const {message} = await response.json();
        return {
            token: null,
            user: null,
            message
        }
    }
    const result = await response.json()

    //find user inside the DB using the information provided during Login. email, password
    // const user = User.findOne()
    // const userProfile = Profile.findOne()

    return {
        token: result.token,
        user: {
            email: result.payload.email,
            permissions: result.payload.permissions,
        },
        message: 'success'
    }
    // so on...
}

export async function recoverUserCredentials(token) {
    function uuidValidate(uuid) {
        return uuidValidate(uuid)
    }

    const isValid = uuidValidate(token);

    if (isValid) {
        // if token is still valid, fetch user's info. But where is user info? payload of token, cookies?
        
    }


    //await dbConnect();

    
    //same as previous one
    //const user = User.findById(_id: token);
    return {
        //same
        token: user._id,
        user: {
            firstName: user.firstName
        }
    }
}
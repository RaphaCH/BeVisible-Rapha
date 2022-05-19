import dbConnect from "../lib/dbConnect";



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
    console.log(result);





    //find user inside the DB using the information provided during Login. email, password
    // const user = User.findOne()
    // const userProfile = Profile.findOne()

    return {
        token: result._id,
        user: {
            email: result.email,
            permissions: result.permissions,
        },
        message: 'success'
    }
    // so on...
}

export async function recoverUserCredentials(token) {
    await dbConnect();

    
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
import dbConnect from "../lib/dbConnect";



export async function signInRequest(data) {
    await dbConnect()

    //find user inside the DB using the information provided during Login. email, password
    // const user = User.findOne()
    // const userProfile = Profile.findOne()

    return {
        token: user._id,
        user: {
            firstName: userProfile.firstName,
            lastName: userProfile.lastName,
        }
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
import mongoose from "mongoose";


if (!process.env.MONGO) {
    throw new Error('Set up a Mongo URL inside .env.local');
}

let cached = global.mongoose;


if(!cached) {
    cached = global.mongoose = {conn: null, promise: null}
}

async function dbConnect() {
    if(cached.conn) {
        return cached.conn
    }

    if(!cached.promise) {
        const opts = {
            bufferCommands: false,
        }

        cached.promise = mongoose.connect(process.env.MONGO, opts).then(mongoose => {
            return mongoose
        })
    }
    cached.conn = await cached.promise;
    return cached.conn
}

export default dbConnect;
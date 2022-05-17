import mongoose from "mongoose";


if (!process.env.MONGO) {
    throw new Error('Set up a Mongo URL inside .env');
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
            // all of the commented line below are no longer supported and will throw and error ir un-commented
            //useNewUrlParser: true, 
            //useUnifiedTopology: true,
            bufferCommands: false,
            //bufferMaxEntries: 0,
            //useFindAndModify: true,
            //useCreateIndex: true,
        }

        cached.promise = mongoose.connect(process.env.MONGO, opts).then(mongoose => {
            return mongoose
        })
    }
    cached.conn = await cached.promise;
    return cached.conn
}

export default dbConnect;
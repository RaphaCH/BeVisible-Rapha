import mongoose from 'mongoose';

const promotionSchema = new mongoose.Schema({
    name: String,
    iteration: Number,
})

export default mongoose.models.Promotion || mongoose.model('Promotion', promotionSchema);
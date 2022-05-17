import mongoose from 'mongoose';

const promotionSchema = new mongoose.Schema({
    name: String,
    iteration: Number,
})

module.exports = mongoose.model.promotionSchema || mongoose.model('Promotion', promotionSchema);
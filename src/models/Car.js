import mongoose from 'mongoose';

const singleDiceAttributeSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  cost: { type: Number, required: true },
  speed: { type: Number, required: true },
  wheelspin: { type: Number, required: true }
});

const diceAttrSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, default: '' },
  rollRate: { type: Number, required: true },
  diceAttributes: [singleDiceAttributeSchema]
});

const CarSchema = new mongoose.Schema({
    carId: { type: String, required: true },
    make: { type: String },
    model: { type: String },
    year: { type: String },
    tier: { type: String },
    value: { type: Number },
    gears: { type: Number },
    image: { type: String },
    parts: {
      engine: [diceAttrSchema],
      turbo: [diceAttrSchema],
      intake: [diceAttrSchema],
      nitrous: [diceAttrSchema],
      body: [diceAttrSchema],
      tires: [diceAttrSchema],
    },
});

export default mongoose.models.Car || mongoose.model('Car',CarSchema);

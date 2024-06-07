import mongoose from 'mongoose';

const singleDiceAttributeSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  cost: { type: Number, required: true },
  horsepower: { type: Number, required: true },
  weight: { type: Number, required: true },
  shiftspeed: { type: Number, required: true },
  wheelspin: { type: Number, required: true },
  owned: { type: Boolean, required: true },
  selected: { type: Boolean, required: true }
});

const diceAttrSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, default: '' },
  rollRate: { type: Number, required: true },
  owned: { type: Boolean, required: true },
  cost: { type: Number, required: true }, 
  diceAttributes: [singleDiceAttributeSchema]
});

const UserCarSchema = new mongoose.Schema({
  userEmail: { type: String, ref: 'User', required: true }, //a@a.com
  car: {
    carId: { type: String, required: true },
    make: { type: String },
    model: { type: String },
    year: { type: String },
    tier: { type: String },
    value: { type: Number },
    gears: { type: Number },
    image: { type: String },
    selected: { type: Boolean, default: false },
    baseStats: {
      horsepower: { type: Number, required: true },
      weight: { type: Number, required: true },
      shiftspeed: { type: Number, required: true }, 
      wheelspin: { type: Number, required: true }
    },
    parts: {
      engine: [diceAttrSchema],
      turbo: [diceAttrSchema],
      intake: [diceAttrSchema],
      body: [diceAttrSchema],
      tires: [diceAttrSchema],
      transmission: [diceAttrSchema],
      nitrous: [diceAttrSchema],
    },
  }
});

export default mongoose.models.UserCar || mongoose.model('UserCar', UserCarSchema);

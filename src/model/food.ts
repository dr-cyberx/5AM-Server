import mongoose, { model, Schema } from 'mongoose';

const foodItemSchema = new Schema({
  foodName: {
    type: String,
    required: [true, 'Food name is required!'],
  },
  category: {
    type: String,
    required: [true, 'food category is required!'],
  },
  foodDesc: {
    type: String,
    required: [true, 'food Description is requried!'],
  },
  foodPrice: {
    type: String,
    required: [true, 'Price is required!'],
  },
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
  },
});

const foodItemModel = model('foodItem', foodItemSchema);

export default foodItemModel;

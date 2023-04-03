import { Document, Model, model, Schema } from 'mongoose';

interface IAddress {
  buildingNumber: string;
  street: string;
  landmark: string;
  city: string;
  state: string;
  zipCode: number;
  country: string;
}

interface IContact {
  email: string;
  phone_1: string;
  phone_2: string;
}

interface IOwner {
  firstName: string;
  lastName: string;
  email: string;
  Contact: IContact;
  Address: IAddress;
}

interface IRestaurant {
  restaurantName: string;
}

interface IRestaurantSchemaDocument extends IRestaurant, Document {}

interface IRestaurantModel extends Model<IRestaurantSchemaDocument> {}

const addressSchema: Schema = new Schema<IAddress>({
  buildingNumber: {
    type: String,
    required: [true, 'Building no. is Required'],
  },
  street: {
    type: String,
    required: [true, 'Street is Required'],
  },
  zipCode: {
    type: Number,
    required: [true, 'Zip Code is Required'],
  },
  city: {
    type: String,
    required: [true, 'City is Required'],
  },
  state: {
    type: String,
    required: [true, 'State is Required'],
  },
  country: {
    type: String,
    required: [true, 'Country is Required'],
  },
});

const contactSchema: Schema = new Schema<IContact>({
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: true,
    validate: {
      validator: (email: string) => /^\S+@\S+\.\S+$/.test(email),
      message: 'Invalid email address.',
    },
  },
  phone_1: {
    type: String,
    required: [true, 'Phone No. 1 is required'],
  },
  phone_2: {
    type: String,
    required: [true, 'Phone No. 2 is required'],
  },
});

const ownerSchema: Schema = new Schema<IOwner>({
  firstName: {
    type: String,
    required: [true, "Owner's first name is required!"],
  },
  lastName: {
    type: String,
    required: [true, "Owner's last name is required!"],
  },
  Address: addressSchema,
  Contact: contactSchema,
  email: {},
});

const restaurantSchema: Schema = new Schema({
  restaurantID: {
    type: String,
    required: [true, 'Restaurant ID is required!'],
  },
  restaurantPassword: {
    type: String,
    required: [true, 'Restaurant Password is required!'],
  },
  restaurantName: {
    type: String,
    required: [true, 'Restaurant name is required'],
  },
  restaurantImg: {
    type: String,
    required: [true, 'restaurantImg is required'],
  },
  currentStatus: {
    type: Boolean,
    required: [true, 'Current status is required! '],
  },
  timing: {
    opening_time: {
      type: Date,
      required: [true, 'Restaurant Opening time is required! '],
    },
    closing_time: {
      type: Date,
      required: [true, 'Closing time is required! '],
    },
  },
  restaurantAddress: addressSchema,
  restaurantContact: contactSchema,
  restaurantOwnerDetails: ownerSchema,
});

const restaurantModel = model<IRestaurantSchemaDocument, IRestaurantModel>('Restaurant', restaurantSchema);

export default restaurantModel;

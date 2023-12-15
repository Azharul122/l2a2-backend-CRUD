import { Document, Schema, model } from 'mongoose';
import {
  Address,
  Orders,
  User,
  FullName,
  UserModel,
} from './users/users.interface';

const fullNameSchema = new Schema<FullName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true,
    maxlength: [20, 'Name can not be more than 20 characters'],
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is required'],
    trim: true,
    maxlength: [20, 'Name can not be more than 20 characters'],
  },
});

const addressSchema = new Schema<Address>({
  street: { type: String },
  city: { type: String },
  country: { type: String },
});
const ordersSchema = new Schema<Orders>({
  productName: String,
  price: Number,
  quantity: Number,
});

const userSchema = new Schema<User & Document, UserModel>({
  userId: { type: Number, required: [true, 'ID is required'], unique: true },
  username: {
    type: String,
    required: [true, 'Must need username'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    maxlength: [20, 'Password can not be more than 20 characters'],
  },
  fullName: { type: fullNameSchema, required: [true, 'Name is required'] },
  age: { type: Number },
  email: { type: String, required: [true, 'Email must needed!'], unique: true },
  isActive: { type: Boolean, default: false },
  hobbies: { type: [String] },
  address: addressSchema,
  orders: { type: [ordersSchema], default: [] },
});

//creating a custom static method for fetch single user data
userSchema.statics.isUserExists = async function (userId: number) {
  const existingUser = await usersModel.findOne({ userId });
  return existingUser;
};

//creating a custom static method for delete single user data
userSchema.statics.delteUserById = async function (userId: number) {
  const existingUser = await usersModel.deleteOne({ userId });
  return existingUser;
};

//creating a custom static method for Update single user data
userSchema.statics.updateUserById = async function (userId: number) {
  const existingUser = await usersModel.findOne({ userId });

  return existingUser;
};

//creating a custom static method for craete single user data
userSchema.statics.craeteOrderById = async function (userId: number) {
  const existingUser = await usersModel.findOne({ userId });
  return existingUser;
};

//creating a custom static method for fetch single user order data
userSchema.statics.allOrderById = async function (userId: number) {
  const existingUser = await usersModel.findOne({ userId });
  return existingUser;
};

//creating a custom static method for fetch single user order data
userSchema.statics.totalOrderPriceById = async function (userId: number) {
  const existingUser = await usersModel.findOne({ userId });
  return existingUser;
};

export const usersModel = model<User & Document, UserModel>(
  'users',
  userSchema,
);

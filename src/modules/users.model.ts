import { Schema, model } from 'mongoose';
import { Address, Orders, User, FullName } from './users/users.interface';

const fullNameSchema = new Schema<FullName>({
  firstName: { type: String,required:true },
  lastName: { type: String,required:true },
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

const userSchema = new Schema<User>({
  userId: { type: Number },
  username: { type: String },
  password: { type: String },
  fullName: fullNameSchema,
  age: { type: Number },
  email: { type: String },
  isActive: { type: Boolean, required: true },
  hobbies: { type: [String], required: true },
  address: addressSchema,
  orders: [ordersSchema],
});

export const usersModel = model<User>('users', userSchema);

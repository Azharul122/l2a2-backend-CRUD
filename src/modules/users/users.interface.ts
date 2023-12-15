import { Model } from 'mongoose';

export type Orders = {
  productName: string;
  price: number;
  quantity: number;
};

export type FullName = {
  firstName: string;
  lastName: string;
};

export type Address = {
  street: string;
  city: string;
  country: string;
};

export type User = {
  userId: number;
  username: string;
  password: string;
  fullName: FullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: Address;
  orders?: Orders[];
};

//for creating static

export interface UserModel extends Model<User> {
  isUserExists(userId: number): Promise<User | null>;
  delteUserById(userId: number): Promise<any>;
  updateUserById(userId: number): Promise<any>;
  craeteOrderById(userId: number): Promise<any>;
  allOrderById(userId: number): Promise<any>;
  totalOrderPriceById(userId: number): Promise<any>;
}

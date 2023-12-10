// import { string } from "joi";
// import { Schema, model, connect } from 'mongoose';

export type Orders = {
  productName: string;
  price: number;
  quantity: number;
};

export type User = {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstname: string;
    lastname: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    state: string;
    country: string;
  };
  orders: Orders[];
};

// import { AnyObject } from 'mongoose';
import { usersModel } from '../users.model';
import { Orders, User } from './users.interface';

const craeteUserIntoDB = async (user: User) => {
  const result = await usersModel.create(user);

  return result;
};

const allUser = async () => {
  const result = await usersModel.find();
  return result;
};
const singleUser = async (userId: string) => {
  const result = await usersModel.findOne({ userId });
  return result;
};
const allOrders = async (userId: string) => {
  const result = await usersModel.findOne({ userId });
  const data = result?.orders;
  return data;
};
const totalOrderPrice = async (userId: string) => {
  const result = await usersModel.findOne({ userId });
  let total = 0;
  result?.orders?.map((order) => {
    total = total + order?.price;
  });

  return total;
};

const deleteUser = async (userId: string) => {
  const result = await usersModel.deleteOne({ userId });
  return result;
};

const updateUser = async (userId: string, userdata: string) => {
  try {
    const existingUser = await usersModel.findOne({ userId });
    const updateData = await existingUser?.set(userdata);
    const savedData = await updateData?.save();
    // console.log(savedData)
    return savedData;
  } catch (error) {
    console.log(error);
  }
};
const addOrdersToDB = async (userId: string, orderdata: Orders) => {
  try {
    const existingUser = await usersModel.findOne({ userId });

    let data = existingUser?.orders;
    data = data || [];
    data?.push(orderdata);
    const savedData = await existingUser?.save();
    // console.log(savedData)
    return savedData;
  } catch (error) {
    console.log(error);
  }
};

export const userServices = {
  craeteUserIntoDB,
  allUser,
  singleUser,
  updateUser,
  deleteUser,
  addOrdersToDB,
  allOrders,
  totalOrderPrice,
};

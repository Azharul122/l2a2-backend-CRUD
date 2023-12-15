import { number } from 'joi';
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
const singleUser = async (userId: number) => {
  const result = await usersModel.isUserExists(userId);

  if (result && result.userId === userId) {
    return result;
  } else {
    return null;
  }
};
const allOrders = async (userId: number) => {
  const result = await usersModel.allOrderById(userId);
  const data = result?.orders;
  if (result) {
    return data;
  } else {
    return null;
  }
};
const totalOrderPrice = async (userId: number) => {
  const result = await usersModel.totalOrderPriceById(userId);
  let total: number = 0;
  result?.orders?.map((order: Orders) => {
    total = total + order?.price * order.quantity;
  });

  if (result) {
    return total;
  } else {
    return null;
  }
};

const deleteUser = async (userId: number) => {
  const result = await usersModel.delteUserById(userId);

  console.log(result);
  if (result?.deletedCount > 0) {
    return result;
  } else {
    return null;
  }
};

const updateUser = async (userId: number, userdata: string) => {
  try {
    const existingUser = await usersModel.updateUserById(userId);
    const updateData = await existingUser?.set(userdata);
    const savedData = await updateData?.save();
    // console.log(savedData)
    if (existingUser) {
      return savedData;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
const addOrdersToDB = async (userId: number, orderdata: Orders) => {
  try {
    const existingUser = await usersModel.craeteOrderById(userId);
    let data = existingUser?.orders;
    data = data || [];
    data?.push(orderdata);
    const savedData = await existingUser?.save();
    // console.log(savedData)
    if (existingUser) {
      return savedData;
    } else {
      return null;
    }
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

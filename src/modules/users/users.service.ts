import { usersModel } from '../users.model';
import { User } from './users.interface';

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
const updateUser = async (userId: string, userdata:string) => {
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

export const userServices = {
  craeteUserIntoDB,
  allUser,
  singleUser,
  updateUser,
};

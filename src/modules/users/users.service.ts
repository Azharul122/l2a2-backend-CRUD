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

export const userServices = {
  craeteUserIntoDB,
  allUser,
};

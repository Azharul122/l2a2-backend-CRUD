import { Request, Response } from 'express';
import { userServices } from './users.service';
// import { User } from "./users.interface";

const craeteUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;
    const result = await userServices.craeteUserIntoDB(user);

    res.status(200).json({
      message: 'Data inserted successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.allUser();

    res.status(200).json({
      message: 'Data fatched successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const userContrller = {
  craeteUser,
  getAllUser,
};

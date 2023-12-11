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
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;

    const result = await userServices.singleUser(id);

    res.status(200).json({
      message: 'Single data fatched successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const body_result = req.body.user;
    const existingUser = await userServices.updateUser(id, body_result);
    // console.log(body_result.user)
    res.status(200).json({
      message: 'Updated ',
      success: true,
      data: existingUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal Server Error',
      success: false,
    });
  }
};

export const userContrller = {
  craeteUser,
  getAllUser,
  getSingleUser,
  updateUser,
};

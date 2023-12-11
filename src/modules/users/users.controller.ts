import { Request, Response } from 'express';
import { userServices } from './users.service';
import { Orders } from './users.interface';
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
const getSingleUserOrder = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;

    const result = await userServices.allOrders(id);

    res.status(200).json({
      message: `All orders for ${id} userId`,
      success: true,
      data: { orders: result },
    });
  } catch (error) {
    console.log(error);
  }
};
const calculateUserOrders = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;

    const result = await userServices.totalOrderPrice(id);

    res.status(200).json({
      message: `Total price calculated successfully!`,
      success: true,
      data: { totalPrice: result },
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    await userServices.deleteUser(id);
    res.status(200).json({
      message: 'Data deleted from DB',
      success: true,
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
const addOrders = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const body_result = req.body as Orders;
    await userServices.addOrdersToDB(id, body_result);

    res.status(200).json({
      message: 'Order placed',
      success: true,
      data: null,
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
  deleteUser,
  addOrders,
  getSingleUserOrder,
  calculateUserOrders,
};

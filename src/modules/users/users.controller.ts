import { Request, Response } from 'express';
import { userServices } from './users.service';
import { Orders } from './users.interface';

const craeteUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;
    const result = await userServices.craeteUserIntoDB(user);
    const singleUserData = {
      userId: result?.userId,
      username: result?.username,
      fullName: result?.fullName,
      email: result?.email,
      age: result?.age,
      hobbies: result?.hobbies,
      isActive: result?.isActive,
    };

    res.status(200).json({
      message: 'Data inserted successfully',
      success: true,
      data: singleUserData,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.allUser();

    const allUserdata = result?.map((singleData) => ({
      username: singleData?.username,
      fullName: singleData?.fullName,
      email: singleData?.email,
      age: singleData?.age,
      address: singleData?.address,
    }));

    res.status(200).json({
      message: 'Data fatched successfully',
      success: true,
      data: allUserdata,
    });
  } catch (error) {
    console.log(error);
  }
};
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;

    const result = await userServices.singleUser(parseInt(id));
    console.log(result);

    const singleUserData = {
      userId: result?.userId,
      username: result?.username,
      fullName: result?.fullName,
      email: result?.email,
      age: result?.age,
      hobbies: result?.hobbies,
      isActive: result?.isActive,
    };

    if (result == null) {
      res.send({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }
    if (singleUserData) {
      res.status(200).json({
        message: 'Single data fatched successfully',
        success: true,
        data: singleUserData,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
const getSingleUserOrder = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;

    const result = await userServices.allOrders(parseInt(id));
    if (result) {
      res.status(200).json({
        message: `All orders for ${id} userId`,
        success: true,
        data: { orders: result },
      });
    } else {
      res.send({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};
const calculateUserOrders = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;

    const result = await userServices.totalOrderPrice(parseInt(id));

    if (result) {
      res.status(200).json({
        message: `Total price calculated successfully!`,
        success: true,
        data: { totalPrice: result },
      });
    } else {
      res.send({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};
const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const result = await userServices.deleteUser(parseInt(id));
    if (result == null) {
      {
        res.send({
          success: false,
          message: 'User not found',
          error: {
            code: 404,
            description: 'User not found!',
            data: null,
          },
        });
      }
    }
    if (result) {
      res.status(200).json({
        message: 'Data deleted from DB',
        success: true,
        data: null,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const body_result = req.body;
    const existingUser = await userServices.updateUser(
      parseInt(id),
      body_result,
    );
    // console.log(body_result.user)

    const singleUserData = {
      userId: existingUser?.userId,
      username: existingUser?.username,
      fullName: existingUser?.fullName,
      email: existingUser?.email,
      age: existingUser?.age,
      hobbies: existingUser?.hobbies,
      isActive: existingUser?.isActive,
      address: existingUser?.address,
    };

    if (existingUser) {
      res.status(200).json({
        message: 'Updated ',
        success: true,
        data: singleUserData,
      });
    } else {
      res.send({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }
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
    const result = await userServices.addOrdersToDB(parseInt(id), body_result);

    if (result) {
      res.status(200).json({
        message: 'Order placed',
        success: true,
        data: null,
      });
    } else {
      res.send({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }
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

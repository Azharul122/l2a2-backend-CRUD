import express from 'express';
import { userContrller } from './users.controller';
const router = express.Router();

router.post('/users/', userContrller.craeteUser);
router.get('/users/', userContrller.getAllUser);
router.get('/users/:userId', userContrller.getSingleUser);
router.put('/users/:userId', userContrller.updateUser);
router.delete('/users/:userId', userContrller.deleteUser);
router.put('/users/:userId/orders', userContrller.addOrders);
router.get('/users/:userId/orders', userContrller.getSingleUserOrder);

export const usersRoutes = router;

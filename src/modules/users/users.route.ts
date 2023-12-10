import  express  from "express"
import { userContrller } from "./users.controller"
const router=express.Router()

router.post("/users/",userContrller.craeteUser)


export const usersRoutes=router

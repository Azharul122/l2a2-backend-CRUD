import { usersModel } from "../users.model";
import { User } from "./users.interface";

const craeteUserIntoDB=async(user:User)=>{
const result=await usersModel.create(user)
return result
}

export const userServices={
    craeteUserIntoDB
}
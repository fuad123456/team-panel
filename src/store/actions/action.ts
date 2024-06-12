import {createAsyncThunk} from "@reduxjs/toolkit";


export const deleteUserAction = createAsyncThunk<
    {userId:number, isDelete:boolean},
    {userId:number, isDelete:boolean}
>(
    "deleteUser",
    async ({userId, isDelete})=>{
        return new Promise<{userId:number, isDelete:boolean}>((resolve)=>{
            setTimeout(()=>{
                resolve({userId, isDelete:isDelete})
            },1000)
        })
    }
)
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types";
import { users } from "../data";


type initialStateType={
	users:UserType[]
	error:string,
	loading:boolean
}
const initialState:initialStateType={
	users,
	error:"",
	loading:false,
}
const adminSlice = createSlice({
	name:"admin",
	initialState,
	reducers:{
		setUserPermissions:(state, action:PayloadAction<{id:number, permissions:string[]}>)=>{
			const user = state.users.find(u=>u.id===action.payload.id)
			if(user){
				user.permissions = action.payload.permissions
			}
		},
		deleteUser:(state, action:PayloadAction<number>)=>{
			state.users = state.users.filter(u=>u.id!==action.payload)
		},
		addUser:(state, action:PayloadAction<{email:string, permissions:string[]}>)=>{
			const idForNewUser = Math.max(...(state.users.map(u=>u.id)))+1;
			const newUser:UserType = {
				id:idForNewUser,
				email:action.payload.email,
				permissions:action.payload.permissions,
			}
			state.users.push(newUser)
		}
	}
})
export const {setUserPermissions} = adminSlice.actions
export default adminSlice
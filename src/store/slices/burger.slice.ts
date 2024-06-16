import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type initialStateType={
	isOpenBurger:boolean
}
const initialState:initialStateType={
	isOpenBurger:false
}
const burgerSlice = createSlice({
	name:"admin",
	initialState,
	reducers:{
		openBurger:(state, action:PayloadAction<boolean>)=>{
			state.isOpenBurger=action.payload
		},
		closeBurger:(state, action:PayloadAction<boolean>)=>{
			state.isOpenBurger=action.payload
		}
	},
})
export const {openBurger, closeBurger} = burgerSlice.actions
export default burgerSlice
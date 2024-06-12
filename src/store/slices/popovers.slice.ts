import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type initialStateType={
	popover:boolean
	popup:boolean
	error:string,
	loading:boolean
	secondaryPopup:{
		isActivate:boolean,
		message:string
	}
}
const initialState:initialStateType={
	popover:false,
	popup:false,
	error:"",
	loading:false,
	secondaryPopup:{
		isActivate:false,
		message:"",
	}
}
const popoversSlice = createSlice({
	name:"admin",
	initialState,
	reducers:{
		setOpenPopup:(state, action:PayloadAction<boolean>)=>{
			state.popup=action.payload
		},
		setSecondaryPopup:(state, action:PayloadAction<{isActivate:boolean, message:string}>)=>{
			state.secondaryPopup.message = action.payload.message
			state.secondaryPopup.isActivate = action.payload.isActivate
		}
	},
})
export const {setOpenPopup, setSecondaryPopup} = popoversSlice.actions
export default popoversSlice
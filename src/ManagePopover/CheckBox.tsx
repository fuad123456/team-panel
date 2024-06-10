import  { ReactElement,  useState } from 'react'
import { useAppDispatch } from '../store/hooks'
import { setUserPermissions } from '../store/slices/admin.slice'
import {UserType} from "../types.ts";


type propsType = {
	user: UserType,
	permission: string,
	setAllChecked: (value: boolean) => void,
	allChecked: boolean,
	forwardedRef: React.RefObject<HTMLFormElement>,
}
export default function CheckBox({ permission, allChecked, setAllChecked, forwardedRef, user }:propsType):ReactElement {
	const [checked, setChecked] = useState(user.permissions.includes(permission))
	const dispatch = useAppDispatch()
	function setCheckedItem(){
		if(forwardedRef.current!=null){
			const checkedInputsNode = forwardedRef.current?.querySelectorAll<HTMLInputElement>("input")
			const checkedInputsArray = Array.from(checkedInputsNode)
			const checkedInputs = checkedInputsArray.filter(input=>input.checked===true)
			const checkedInputValues = checkedInputs.map(i=>i.value)
			dispatch(setUserPermissions(
				{id:user.id, permissions:checkedInputValues}
				))
				}
		setChecked(!checked)
		setAllChecked(false)
	}
	return (
		<div className='flex gap-1'>
			<input type="checkbox"
				className='w-4 rounded-3xl'
				name={user.id.toString()}
				id={permission}
				checked={ checked || allChecked}
				onChange={setCheckedItem}
				value={permission}
			/>
			<label htmlFor={user.id.toString()}>{permission}</label>
		</div>
	)
}

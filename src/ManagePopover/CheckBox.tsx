import  { ReactElement,  useState } from 'react'
import { useAppDispatch } from '../store/hooks'
import { setUserPermissions } from '../store/slices/admin.slice'


type propsType = {
	userId:number
	permission:string
	setAllChecked:(value:boolean)=>void
	allChecked:boolean
	permissions:string[]
	forwardedRef: React.RefObject<HTMLFormElement>;
}
export default function CheckBox({permission, allChecked, setAllChecked, permissions, forwardedRef, userId}:propsType):ReactElement {
	const [checked, setChecked] = useState(false)
	const dispatch = useAppDispatch()
	function setCheckedItem(){
		if(forwardedRef.current!=null){
			const checkedInputsNode = forwardedRef.current?.querySelectorAll<HTMLInputElement>("input")
			const checkedInputsArray = Array.from(checkedInputsNode)
			const checkedInputs = checkedInputsArray.filter(input=>input.checked===true)
			const checkedInputValues = checkedInputs.map(i=>i.value)
			dispatch(setUserPermissions(
				{id:userId, permissions:checkedInputValues}
				))
				}
		setChecked(prev=>!prev)
		setAllChecked(false)

	}
	const isChecked=():boolean=>{
		if(permissions.includes(permission)) return true;
		return false
	}
	return (
		<div className='flex gap-1'>
			<input type="checkbox"
				className='w-4 rounded-3xl'
				name={userId.toString()}
				id={permission}
				checked={isChecked() || checked || allChecked}
				onChange={setCheckedItem}
				value={permission}
			/>
			<label htmlFor={userId.toString()}>{permission}</label>
		</div>
	)
}

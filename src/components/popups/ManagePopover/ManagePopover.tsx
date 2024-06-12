import React, {useEffect, useRef, useState} from 'react'
import { users } from "../../../store/data.ts"
import CheckBox from './CheckBox.tsx'
import { UserType } from '../../../types.ts'
import { useAppDispatch } from '../../../store/hooks.tsx'
import { setUserPermissions } from '../../../store/slices/admin.slice.ts'



type propsType = {
	user: UserType
	setChoiceVisible: React.Dispatch<React.SetStateAction<boolean>>
	activePop:boolean
	setActivePop: React.Dispatch<React.SetStateAction<boolean>>
}
export default function ManagePopver({ user, activePop }: propsType) {
	const [allChecked, setAllChecked] = useState(false)
	const permissions = [...new Set((users.map(u => u.permissions)).flat())]
	const dispatch = useAppDispatch()
	const formRef = useRef<HTMLFormElement>(null)
	function onChangeAll() {
		if (formRef.current != null) {
			setAllChecked(prev => !prev)

		}
	}
	useEffect(()=>{
		async function dispatchAll(){
			if (!allChecked) {
				await new Promise((resolve)=>{
					const checkedInputsNode = formRef.current?.querySelectorAll('input[type="checkbox"]:checked') as NodeListOf<HTMLInputElement>
					const checkedInputsArray = Array.from(checkedInputsNode)
					const checkedInputValues = checkedInputsArray.map(i => i.value)
					console.log(checkedInputValues)
					resolve(checkedInputValues)
				}).then((res)=>{
					dispatch(setUserPermissions(
						{ id: user.id, permissions: (res as string[]) }
					))
				})
			} else {
				if (formRef.current != null) {
					await new Promise((resolve)=>{
						resolve(permissions)
					}).then((res)=>{
						dispatch(setUserPermissions(
							{ id: user.id, permissions: (res as string[])}
						))
					})
				}
			}
		}
		dispatchAll().catch(e=>console.log(e))
	},[allChecked, dispatch, user.id])

	return (
			<div className={`${activePop ? "block" : "hidden"}`}>
				<div className="flex flex-col p-2 absolute rounded-md bg-[#F9FAFB] w-64 z-30 shadow-popover">
					<form  ref={formRef}>
						<div>
							<input type="checkbox" name="all" id="all"
								onChange={onChangeAll}
								checked={allChecked}
								value={"all"}
							/>
							<label htmlFor="all">Все</label>
						</div>
						{permissions.map((p, i) => (
							<div className='flex gap-1' key={p + i}>
								<CheckBox
									allChecked={allChecked}
									permission={p}
									setAllChecked={setAllChecked}
									user={user}
									forwardedRef={formRef}
								/>
							</div>
						))}
					</form>
				</div>
			</div>
	)
}

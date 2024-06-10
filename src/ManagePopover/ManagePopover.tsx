import { useRef, useState } from 'react'
import { users } from "./../store/data"
import dots from "./../assets/dots.svg"
import CheckBox from './CheckBox'
import { UserType } from '../types'
import { useAppDispatch } from '../store/hooks'
import { setUserPermissions } from '../store/slices/admin.slice'



type propsType = {
	user: UserType
}
export default function ManagePopver({ user }: propsType) {
	const [activePop, setActivePop] = useState(false)
	const [allChecked, setAllChecked] = useState(false)
	const permissions = [...new Set((users.map(u => u.permissions)).flat())]
	const dispatch = useAppDispatch()
	const formRef = useRef<HTMLFormElement>(null)
	function onChangeAll() {
		if (formRef.current != null) {
			setAllChecked(prev => !prev)
			allDispatch()
		}
	}
	function allDispatch() {
		if (!allChecked) {
			dispatch(setUserPermissions(
				{ id: user.id, permissions: permissions }
			))
		} else {
			if (formRef.current != null) {
				const checkedInputsNode = formRef.current?.querySelectorAll('input[type="checkbox"]:checked') as NodeListOf<HTMLInputElement>
				const checkedInputsArray = Array.from(checkedInputsNode)
				const checkedInputValues = checkedInputsArray.map(i => i.value)
				dispatch(setUserPermissions(
					{ id: user.id, permissions: checkedInputValues }
				))
			}
		}
	}
	return (
		<div className='relative'>
			<button
				onClick={() => setActivePop(prev => !prev)}
			>
				<img src={dots} alt="" />
			</button>
			<div className={`${activePop ? "block" : "hidden"}`}>
				<div className="flex flex-col p-2 absolute rounded-md bg-[#F9FAFB] w-64 z-30 shadow-popover">
					<form action="" ref={formRef}>
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
		</div>
	)
}

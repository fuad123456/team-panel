import  {ReactElement, useState} from 'react'
import { UserType } from '../types'
import "./../App.css"
import ManagePopover from './popups/ManagePopover/ManagePopover'
import {ChoicePopover} from "./popups/ChoicePopover/ChoicePopover.tsx";
import dots from "../assets/dots.svg";
import defaultUser from "./../assets/defaultUser.svg"
type propsType = {
	user: UserType
}
export default function UserItem({ user }: propsType): ReactElement {
	const [choiceVisible, setChoiceVisible] = useState<boolean>(false)
	const [activePop, setActivePop] = useState(false)
	const styleObj:Record<string, string> = {
		backgroundImage: (user.image ?`url(${user?.image})`:`url(${defaultUser})`),
		backgroundPosition: "center center",
		backgroundSize: "cover"
	}

	return (
		<li className='list-none '>
			<div className='flex justify-between hover:bg-gray-100 px-7 py-4'>
				<div className="flex">
					<div className={"w-20"}>
						<div className="rounded-full w-14 h-14 sm:w-16 sm:h-16 mr-3"
							style={styleObj}
						>
					</div>
					</div>
					<div className="user-content">
						<div className='mb-2'>
							<span className=' text-lg text-[#424F5E] font-bold'>{user.name?user.name:"Пользователь"}</span>
							<span className='ml-3 text-lg text-[#9494A0]'>{user.name?"":"Не авторизован"} {user.email}</span>
						</div>
						<div className="flex flex-wrap gap-1">
							{user.permissions.map((p,i)=>(
								<span className='rounded-[10px] border border-[#c1c1cb] px-3 py-0.5 mr-1' key={p+i}>
									<span className='text-[#9494A0]'>{p}</span>
								</span>
							))}
						</div>
					</div>
				</div>
				<div className='relative'>
					<button
						onClick={() => {
							if(activePop) {
								setChoiceVisible(false)
								setActivePop(false)
							}else {
								setChoiceVisible(prev=>!prev)
								// setActivePop(prev=>!prev)
							}
						}}
						className={"p-2"}
					>
						<img src={dots} alt="" />
					</button>
					<ChoicePopover choiceVisible={choiceVisible} setChoiceVisible={setChoiceVisible} setActivePop={setActivePop} user={user}/>
					<ManagePopover user={user} setChoiceVisible={setChoiceVisible} setActivePop={setActivePop} activePop={activePop}/>
				</div>
			</div>
		</li>
	)
}

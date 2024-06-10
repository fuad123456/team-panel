import { ReactElement } from 'react'
import { UserType } from '../types'
import "./../App.css"
import ManagePopover from '../ManagePopover/ManagePopover'
type propsType = {
	user: UserType
}
export default function UserItem({ user }: propsType): ReactElement {
	return (
		<li className='list-none'>
			<div className='flex justify-between hover:bg-gray-100 px-7 py-2'>
				<div className="flex">
					<div className="rounded-full w-16 h-16 mr-3"
						style={{ backgroundImage: `url(${user.image})`, backgroundPosition: "center center", backgroundSize: "cover"}}
					>
					</div>
					<div className="user-content">
						<div className='mb-2'>
							<span className=' text-lg text-[#424F5E] font-bold'>{user.name}</span>
							<span className='ml-3 text-lg text-[#9494A0]'>{user.email}</span>
						</div>
						<div className="permissions">
							{user.permissions.map((p,i)=>(
								<span className='rounded-[10px] border border-[#c1c1cb] px-3 py-1 w-auto mr-1' key={p+i}>
									<span className='text-[#9494A0]'>{p}</span>
								</span>
							))}
						</div>
					</div>
				</div>
				<ManagePopover user={user}/>
			</div>
		</li>
	)
}

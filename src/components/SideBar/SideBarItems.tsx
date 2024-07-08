import { ReactElement } from 'react'
import { sidebarData } from './sidebarData'
import SidebarItem from './SidebarItem'
import logo from "./../../assets/logo.svg"
import owner from "./../../assets/owner.png"


export default function SideBarItems(): ReactElement {

	return (
		<div className=''>
			<div className=' w-full justify-center items-center mb26 hidden sm:flex'>
				<img src={logo} alt="logo" />
			</div>
			<div className='flex w-full justify-center items-center mb26'>
				<img src={owner} alt="logo" className='w-[60px]'/>
				<div className={"ml-3 block sm:hidden"}>
					<div className={"text-[#3a536e] text-lg font-bold"}>Артем Иванов</div>
					<div className={"text-[#9494A0]"}>Собственник</div>
				</div>
			</div>
			{
				sidebarData.map(i => (
					<SidebarItem id={i.id}
						key={i.id}
						name={i.name}
						value={i.value}
						iconPath={i.value}
					/>))
			}
		</div>
	)
}

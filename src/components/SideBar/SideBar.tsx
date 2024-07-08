import { ReactElement } from 'react'
import SideBarItems from './SideBarItems'
import {useAppSelector} from "../../store/hooks.tsx";

import BurgerButton from "../BurgerButton.tsx";

export default function SideBar():ReactElement {
	const isOpenBurger = useAppSelector(state => state.burger?.isOpenBurger)


return (
		<div className={` fixed sm:static top-0 bottom-0 left-0 sm:left-20 z-50 w-60 transform transition-transform duration-300 ease-in-out ${isOpenBurger?"-translate-x-full sm:translate-x-0":""}`}>
				<div className='px-5 py-6 rounded-tr-3xl bg-white min-h-screen h-full'>
					<div className="mt-3 sm:hidden mb-5">
						<BurgerButton/>

					</div>
					<SideBarItems/>
				</div>
		</div>
	)
}

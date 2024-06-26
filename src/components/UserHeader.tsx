
import search from "./../assets/search.svg"
import {Popup} from "./popups/Popup.tsx";
import {useAppDispatch, useAppSelector} from "../store/hooks.tsx";
import {setOpenPopup} from "../store/slices/popovers.slice.ts";
import {SecondaryPopup} from "./popups/SecondaryPopup.tsx";
import BurgerButton from "./BurgerButton.tsx";
type propsType= {
	title:string

}

export default function UserHeader({title}:propsType) {
	const isOpenPopup = useAppSelector(state => state.popups.popup)
	const isOpenSecondaryPopup = useAppSelector(state => state.popups?.secondaryPopup.isActivate)
	const dispatch = useAppDispatch()

	return (
		<div
			className='px-7 flex flex-col lg:flex-row w-full md:justify-between items-start mb-2 md:items-start justify-start border-b-[1px] pb-4'>
			<div className={"flex gap-2 mb-2"}>
				<BurgerButton />
				<div className="text-[#424F5E] text-lg font-bold">{title}</div>
			</div>
			<div className='flex flex-col lg:flex-row justify-end w-full lg:w-10/12 gap-2'>
				<div className='flex-1 relative'>
					<input type="text" className='border rounded-md w-full py-1.5 px-3' placeholder='Поиск по Email'/>
					<button className='absolute right-3 top-3'>
						<img src={search} alt="search"/>
					</button>
				</div>
				<div className="w-full lg:w-auto">
					<button className='px-4 py-1.5 bg-[#32C076] text-white rounded-lg w-full lg:w-auto'
							onClick={() => dispatch(setOpenPopup(!isOpenPopup))}
					>Добавить пользователя
					</button>
				</div>
			</div>
			{isOpenSecondaryPopup && <SecondaryPopup/>}
			{
				isOpenPopup && <Popup/>
			}
		</div>
	)
}

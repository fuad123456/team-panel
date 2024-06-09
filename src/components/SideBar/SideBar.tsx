import { ReactElement } from 'react'
import SideBarItems from './SideBarItems'

export default function SideBar():ReactElement {

  return (
	<div className='px-5 py-6 rounded-tr-3xl bg-white hidden md:block'>
		<div className="owner">

		</div>
		<SideBarItems/>
	</div>
  )
}

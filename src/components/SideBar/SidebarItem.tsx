import { ReactElement} from 'react'
import { SidebarItemType } from '../../types'
import { Link } from 'react-router-dom'


export default function SidebarItem({ value, name, iconPath }: SidebarItemType): ReactElement {

	return (
		<Link to={`/${value}`} title={value}>
			<div className='flex justify-center items-center mb26'>
				<div>
					<img src={`${iconPath}`} alt="" className='w-5' style={{minWidth:"24px"}}/>
				</div>
				<div className='block md:hidden'>{name}</div>
			</div>
		</Link>
	)
}

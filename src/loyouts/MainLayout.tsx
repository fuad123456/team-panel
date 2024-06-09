
import SideBar from '../components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
	return (
		<>
			<main className=''>
				<div className="flex">
					<SideBar />
					<div className='px-40 py-20 w-full' >
						<Outlet/>
					</div>
				</div>
			</main>
		</>
	)
}

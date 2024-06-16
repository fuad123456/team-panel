
import SideBar from '../components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
	return (
		<>
			<main className=''>
				<div className="flex">
					<SideBar />
					<div className='p-0 py-0 sm:px-5 md:px-10 lg:px-20 xl:px-40 sm-py-10 md:py-20 w-full' >
						<Outlet/>
					</div>
				</div>
			</main>
		</>
	)
}

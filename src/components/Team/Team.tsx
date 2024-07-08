
import UserHeader from '../UserHeader'
import { useAppSelector } from '../../store/hooks'
import UserItem from '../UserItem'

export default function Team() {
	const users = useAppSelector(state => state.admin.users)
	return (
		<div className=''>
			<div className="w-full max-w-[1135px] py-5 bg-white rounded-xl">
				<UserHeader title='Команда' />
				{users.map(user => {
					return <UserItem user={user} key={user.id} />

				})}
			</div>
		</div>
	)
}

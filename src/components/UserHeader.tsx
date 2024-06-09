
import search from "./../assets/search.svg"

type propsType= {
	title:string

}
export default function UserHeader({title}:propsType) {

	return (
		<div className='px-7 flex w-full justify-between items-center'>
			<div className="text-[#424F5E] text-lg font-bold">{title}</div>
			<div className='flex flex-col md:flex-row  justify-end w-full md:w-10/12 gap-2'>
				<div className='flex-1 relative'>
					<input type="text" className='border rounded-md w-full py-1.5 px-3' placeholder='Поиск по Email'/>
					<button className='absolute right-3 top-3'>
						<img src={search} alt="search" />
					</button>
				</div>
				<div className="">
					<button className='px-4 py-1.5 bg-[#32C076] text-white rounded-lg '>Добавить пользователя</button>
				</div>
			</div>
		</div>
	)
}

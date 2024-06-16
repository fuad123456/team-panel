import { ReactElement, useEffect, useState } from 'react'
import { sidebarData } from './sidebarData'
import SidebarItem from './SidebarItem'
import logo from "./../../assets/logo.svg"
import owner from "./../../assets/owner.png"

export default function SideBarItems(): ReactElement {
	const [path, setPath] = useState<string[]>([])
	useEffect(() => {
		getIconPaths().then(iconPathsArray => {
			setPath(iconPathsArray as string[]);
		}).catch(error => {
			console.error('Произошла ошибка:', error);
		});
	}, [])
	function getIconPaths() {
		return new Promise((resolve, reject) => {
			const iconContext = import.meta.glob('../../assets/sidebar/*.svg');
			const icons = Object.entries(iconContext).map(([, iconModule]) => iconModule());

			const iconPaths = icons.map(async iconPromise => {
				const icon = await iconPromise
				return (icon as { default: string })["default"]
			});

			Promise.all(iconPaths).then(resolvedIconPaths => {
				const iconPathsArray = resolvedIconPaths.map(iconPath => iconPath);
				resolve(iconPathsArray);
			}).catch(error => {
				reject(error);
			});
		});
	}
	const getCurrentPath = (pathsArray: string[], value: string) => {
		return pathsArray
				.find(path => path.split("/")[path.split("/").length - 1]
				.split(".svg")[0] === value
			)
	}
	
	return (
		<div className=''>
			<div className=' w-full justify-center items-center mb26 hidden sm:flex'>
				<img src={logo} alt="logo" />
			</div>
			<div className='flex w-full justify-center items-center mb26'>
				<img src={owner} alt="logo" className='w-[60px]'/>
				<div className={"ml-3 block sm:hidden"}>
					<div className={"text-[#424F5E] text-lg font-bold"}>Артем Иванов</div>
					<div className={"text-[#9494A0]"}>Собственник</div>
				</div>
			</div>
			{
				sidebarData.map(i => (
					<SidebarItem id={i.id}
						key={i.id}
						name={i.name}
						value={i.value}
						iconPath={getCurrentPath(path, i.value) ?? ""}
					/>))
			}
		</div>
	)
}

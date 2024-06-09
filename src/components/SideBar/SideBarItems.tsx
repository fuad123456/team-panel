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
			const iconContext = import.meta.glob('../../assets/*.svg');
			const icons = Object.entries(iconContext).map(([, iconModule]) => iconModule());

			const iconPaths = icons.map(iconPromise => {
				return iconPromise.then(icon => (icon as { default: string })["default"]);
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
	console.log(getCurrentPath(path,"blog"));
	
	return (
		<div className=''>
			<div className='flex w-full justify-center items-center mb26'>
				<img src={logo} alt="logo" />
			</div>
			<div className='flex w-full justify-center items-center mb26'>
				<img src={owner} alt="logo" className='w-[60px]'/>
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

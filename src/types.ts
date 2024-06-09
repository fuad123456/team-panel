export type UserType = {
	id:number
	name?: string,
	email: string,
	permissions: string[],
	image?: string
}
export type SidebarItemType={
	id:number
	name:string
	value:string
	iconPath?:string
}
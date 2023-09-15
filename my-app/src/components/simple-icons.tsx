interface SimpleIconType {
	icon: any
	className: any
}

export function SimpleIcon({ icon, ...props }: SimpleIconType) {
	props.className = `${props?.className}`
	return <>
		<span {...props} dangerouslySetInnerHTML={{ __html: icon.svg }} />
	</>
}
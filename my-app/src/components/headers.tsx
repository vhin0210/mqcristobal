import {
	useEffect,
	useState,
	useMemo,
} from "react"

import {
	siDrupal,
	siFacebook,
	siInstagram,
	siGithub,
} from "simple-icons"
import {
	SimpleIcon,
} from "./simple-icons"

import myImage from "../assets/images/me.png"

export function Intro({...props}) {
	const [positionIndex, setPositionIndex] = useState(0)

	const positions = useMemo(() => {
		return [
			<><em>Software</em> engineer</>,
			<><em>Drupal</em> specialist</>,
			<><em>UI</em> master</>,
			<><em>PHP</em> developer</>,
			<><em>Python</em> developer</>,
			<><em>Javascript</em> developer</>,
			<><em>ReactJS</em> developer</>,
		]
	}, [])

	useEffect(() => {
		// const interval = setInterval(() => {
		// 	const newPositionIndex = positionIndex < positions?.length - 1 ? positionIndex + 1 : 0
		// 	setPositionIndex(newPositionIndex)
		// }, 3000)
		const timeout = setTimeout(() => {
			const newPositionIndex = positionIndex < positions?.length - 1 ? positionIndex + 1 : 0
			setPositionIndex(newPositionIndex)
		}, 3000)

		return () => {
			// clearInterval(interval)
			clearTimeout(timeout)
		}
	}, [positionIndex, positions])

	return <div className="flex justify-end relative">
		<div className="absolute h-full flex items-center">
			<div className="flex flex-col">
				<h1 className="flex flex-col">
		          <span>My Name</span>
		          <span>is Mark Quirvien Cristobal</span>
		        </h1>
		        <h2>{ positions[positionIndex] }</h2>
	        </div>
	    </div>
        <div className="max-w-[700px] my-20">
        	<img alt="" className="max-w-full" src={myImage} />
       	</div>
	</div>
}

export function Socials({...props}) {
	return <div className="my-20">
		<ul className="flex justify-evenly">
			<li><SimpleIcon icon={siDrupal} className="w-12 h-12 block fill-white" /></li>
			<li><SimpleIcon icon={siGithub} className="w-12 h-12 block fill-white" /></li>
			<li><SimpleIcon icon={siFacebook} className="w-12 h-12 block fill-white" /></li>
			<li><SimpleIcon icon={siInstagram} className="w-12 h-12 block fill-white" /></li>
		</ul>
	</div>
}
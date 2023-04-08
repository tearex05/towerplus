import React from 'react'

function Nav() {
	return (
		<nav className="w-full fixed top-0 flex flex-row items-center justify-around text-5xl p-3 bgx z-20">
			<a href="#home" className="trackingx">HOME</a>
			<span className="">|</span>
			<a href="#works" className="trackingx">WORKS</a>
			<span className="">|</span>
			<a href="#plans" className="trackingx">PLANS</a>
			<span className="">|</span>
			<a href="#contact" className="trackingx">CONTACT</a>
		</nav>
	)
}

export default Nav
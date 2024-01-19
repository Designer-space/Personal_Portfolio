import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import MagneticWrapper from "../MagneticWrapper";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const navAnimation = {
	initial: {
		y: -50,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			damping: 10,
			stiffness: 100,
		},
	},
	exit: {
		y: -50,
		opacity: 0,
	},
};

const Header = () => {
	const [isScrolling, setIsScrolling] = useState(false);

	const handelScroll = () => {
		if (window.scrollY >= 80) {
			setIsScrolling(true);
		} else {
			setIsScrolling(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handelScroll);

		return () => {
			window.removeEventListener("scroll", handelScroll);
		};
	}, []);

	return (
		<>
			<header className='hidden w-full sm:flex justify-between items-center py-4 px-10 absolute top-0'>
				<div className=''>
					<p>VINAY</p>
				</div>
				<nav>
					<ul className='flex gap-8 text-2xl uppercase'>
						<MagneticWrapper>
							<li className='relative p-4 flex items-center justify-center cursor-pointer before:w-[5px] before:h-[5px] before:rounded-full before:bg-transparent before:block before:absolute before:-bottom-1 hover:before:bg-white before:scale-0 hover:before:scale-100 transition-all before:duration-300'>
								<Link to={"/About"}>About</Link>
							</li>
						</MagneticWrapper>
						<MagneticWrapper>
							<li className='p-4 flex items-center justify-center cursor-pointer before:w-[5px] before:h-[5px] before:rounded-full before:bg-transparent before:block before:absolute before:-bottom-1 hover:before:bg-white before:scale-0 hover:before:scale-100 transition-all before:duration-300'>
								<Link to={"/Projects"}>Project</Link>
							</li>
						</MagneticWrapper>
						<MagneticWrapper>
							<li className='p-4 flex items-center justify-center cursor-pointer before:w-[5px] before:h-[5px] before:rounded-full before:bg-transparent before:block before:absolute before:-bottom-1 hover:before:bg-white before:scale-0 hover:before:scale-100 transition-all before:duration-300'>
								<Link to={"#Footer"}>Contact</Link>
							</li>
						</MagneticWrapper>
					</ul>
				</nav>
			</header>
			{isScrolling && <Navbar />}
		</>
	);
};

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);
	return (
		<>
			<motion.div
				onClick={() => setIsActive(!isActive)}
				className='fixed mt-0 mr-0 top-10 right-10 z-30 ml-auto w-10 h-10 sm:w-20 sm:h-20 bg-blue-300 mix-blend-difference rounded-full flex items-center justify-center cursor-pointer'>
				<div
					className={`w-full after:block after:w-[40%] after:bg-black after:h-[1px] after:m-auto after:relative after:-top-[5px]
					before:block before:w-[40%] before:bg-black before:h-[1px] before:m-auto before:relative before:top-[5px] before:transition-transform before:duration-300 after:transition-transform after:duration-300 ${
						isActive
							? " after:rotate-45 before:-rotate-45 before:-translate-y-[5px] after:translate-y-[4px]"
							: ""
					}`}></div>
			</motion.div>
			<AnimatePresence mode='wait'>{isActive && <NavMenu />}</AnimatePresence>
		</>
	);
};

export default Header;

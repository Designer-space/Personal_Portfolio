import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CurveSvg from "./CurveSvg";
import MagneticWrapper from "../MagneticWrapper";

const menuSlide = {
	initial: {
		x: "calc(100% + 100px)",
	},
	enter: {
		x: "0%",
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
	},
	exit: {
		x: "calc(100% + 100px)",
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
	},
};

const slide = {
	initial: {
		x: "80px",
	},
	enter: {
		x: "0px",
		transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
	},
	exit: {
		x: "80px",
		transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
	},
};

const NavMenu = () => {
	return (
		<>
			<motion.div
				variants={menuSlide}
				animate='enter'
				exit='exit'
				initial='initial'
				className='w-screen h-screen fixed top-0 left-0 bg-gradient-to-l from-black to-transparent z-[19]'></motion.div>
			<motion.div
				variants={menuSlide}
				animate='enter'
				exit='exit'
				initial='initial'
				transition={{ duration: 0.8, ease: [0.7, 0, 0.2, 1] }}
				className='menu  fixed w-full sm:w-3/4 lg:w-1/2 right-0 top-0 h-screen bg-[#2b2b2b] shadow-2xl text-white z-20'>
				<div className='body w-full p-8 sm:p-20 h-full flex flex-col justify-between'>
					<div className='nav  flex flex-col text-4xl gap-3 mt-20 w-full'>
						<div className='header uppercase '>
							<p className='text-lg text-white/50 tracking-widest font-semibold border-b border-white w-full pb-[2vw] mb-[2vw]'>
								Navigation
							</p>
							<motion.ul
								variants={slide}
								animate='enter'
								exit='exit'
								initial='initial'
								className='text-white'>
								<motion.li className='mt-8'>
									<Link to={"./About"}>
										<p>About</p>
									</Link>
								</motion.li>

								<motion.li className='mt-8'>
									<Link to={"/Projects"}>
										<p>Project</p>
									</Link>
								</motion.li>

								<motion.li className='mt-8'>
									<Link to={"#Footer"}>
										<p>Contact</p>
									</Link>
								</motion.li>
							</motion.ul>
						</div>
					</div>
					<div className='flex justify-center'>
						<ul className='flex items-center text-white/70 font-semibold tracking-wider gap-4'>
							<MagneticWrapper>
								<li className='hover:text-white focus:text-white p-4'>
									<Link to={""}>LinkedIn</Link>
								</li>
							</MagneticWrapper>

							<MagneticWrapper>
								<li className='hover:text-white focus:text-white p-4'>
									<Link to={""}>GitHub</Link>
								</li>
							</MagneticWrapper>

							<MagneticWrapper>
								<li className='hover:text-white focus:text-white p-4'>
									<Link to={""}>Gmail</Link>
								</li>
							</MagneticWrapper>
						</ul>
					</div>
					<CurveSvg />
				</div>
			</motion.div>
		</>
	);
};

export default NavMenu;

// relative before:w-full before:h-[2px] before:absolute before:bg-red-500 before:bottom-1

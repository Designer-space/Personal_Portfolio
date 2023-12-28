import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavMenu from "./NavMenu";

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);
	isActive
		? (document.body.style.overflowY = "hidden")
		: (document.body.style.overflowY = "unset");
	return (
		<>
			<motion.div
				initial={{ scale: 0, opacity: 0 }}
				whileInView={{ scale: 1, opacity: 1 }}
				transition={{
					duration: 0.3,
					ease: [0, 0.71, 0.2, 1.01],
					scale: {
						type: "spring",
						damping: 6,
						stiffness: 100,
						restDelta: 0.001,
					},
				}}
				onClick={() => setIsActive(!isActive)}
				className='sticky top-10 right-10 z-30 ml-auto w-10 h-10 sm:w-20 sm:h-20 bg-[#3e57e2] rounded-full flex items-center justify-center cursor-pointer mt-8'>
				<div
					className={`w-full after:block after:w-[40%] after:bg-white after:h-[1px] after:m-auto after:relative after:-top-[5px]
					before:block before:w-[40%] before:bg-white before:h-[1px] before:m-auto before:relative before:top-[5px] before:transition-transform before:duration-300 after:transition-transform after:duration-300 ${
						isActive
							? " after:rotate-45 before:-rotate-45 before:-translate-y-[5px] after:translate-y-[4px]"
							: ""
					}`}></div>
			</motion.div>
			<AnimatePresence mode='wait'>
				{isActive && <NavMenu key={"navbar"} />}
			</AnimatePresence>
		</>
	);
};

export default Navbar;

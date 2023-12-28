import React from "react";
import { motion } from "framer-motion";

const CurveSvg = () => {
	const initalPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
		window.innerHeight / 2
	} 100 0`;

	const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
		window.innerHeight / 2
	} 100 0`;

	const pathAnimation = {
		inital: {
			d: initalPath,
		},
		enter: {
			d: targetPath,
			transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
		},
		exit: {
			d: initalPath,
			transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
		},
	};

	return (
		<svg className='absolute top-0 -left-[99px] w-[100px] h-full fill-[#2b2b2b] stroke-none'>
			<motion.path
				variants={pathAnimation}
				initial='inital'
				animate='enter'
				exit='exit'></motion.path>
		</svg>
	);
};

export default CurveSvg;

import React from "react";
import { motion } from "framer-motion";

const Button = ({ text }) => {
	return (
		<motion.a
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "20%" }}
			transition={{
				duration: 1,
			}}
			href='#'
			className='bg-black py-[18px] px-[30px] rounded-[100vw] uppercase leading-none relative overflow-hidden before:absolute before:w-[23px] before:h-[23px] before:bg-blue-300 before:top-1/2 before:left-5 before:-translate-y-1/2 before:rounded-[100vw] before:border-[2px] before:border-solid before:border-black group hover:before:w-full hover:before:h-full hover:before:left-0 hover:before:z-[1] before:transition-all before:duration-500 flex w-fit'>
			<span className='pl-5 relative z-[2] text-white group-hover:pl-0 group-hover:text-black transition-all duration-500 text-xl leading-none '>
				{text}
			</span>
		</motion.a>
	);
};

export default Button;

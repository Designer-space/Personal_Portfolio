import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
	return (
		<section className='max-w-[1440px] mx-auto px-4 pb-16'>
			<div className='text-fluid-300 md:h-[90vh] flex flex-col justify-center'>
				<motion.p
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ margin: "20%" }}
					transition={{
						duration: 1,
					}}
					className='max-w-[1000px] pb-8'>
					I'm a self-taught FrontEnd Developer with a focus on writing
					accessible HTML, using modern CSS practices and writing clean
					JavaScript. I've been working as a FrontEnd Developer for about 2
					Years
					<br />
					<br />
					I'm currently working as a Fullstack Developer at Pentacl&nbsp;Design,
					an advertising agency with devotion to slick Design, in mumbai.
				</motion.p>

				<motion.a
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ margin: "20%" }}
					transition={{
						duration: 1,
					}}
					href='#'
					className='bg-black py-[18px] px-[30px] rounded-[100vw] uppercase leading-none relative overflow-hidden before:absolute before:w-[23px] before:h-[23px] before:bg-[#c2e9fb] before:top-1/2 before:left-5 before:-translate-y-1/2 before:rounded-[100vw] before:border-[2px] before:border-solid before:border-black group hover:before:w-full hover:before:h-full hover:before:left-0 hover:before:z-[1] before:transition-all before:duration-500 flex w-fit'>
					<span className='pl-5 relative z-[2] text-white group-hover:pl-0 group-hover:text-black transition-all duration-500 text-xl leading-none '>
						more about me
					</span>
				</motion.a>
			</div>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ margin: "20%" }}
				transition={{
					duration: 0.6,
				}}
				className='text-white/70 max-w-[600px] ml-auto mt-[10vw]'>
				<h2 className='text-white uppercase text-5xl font-semibold'>
					expertises
				</h2>
				<ul className='sm:columns-2 pt-4 text-fluid-200'>
					<li className=' relative pl-4 pt-8 before:absolute before:w-[6px] before:h-[2px] before:bg-white before:inline-block before:top-1/2 before:left-0 before:-translate-y-1/2 before:mt-4 '>
						React JS
					</li>
					<li className=' relative pl-4 pt-8 before:absolute before:w-[6px] before:h-[2px] before:bg-white before:inline-block before:top-1/2 before:left-0 before:-translate-y-1/2 before:mt-4 '>
						JavaScript
					</li>
					<li className=' relative pl-4 pt-8 before:absolute before:w-[6px] before:h-[2px] before:bg-white before:inline-block before:top-1/2 before:left-0 before:-translate-y-1/2 before:mt-4 '>
						TailwindCSS
					</li>
					<li className=' relative pl-4 pt-8 before:absolute before:w-[6px] before:h-[2px] before:bg-white before:inline-block before:top-1/2 before:left-0 before:-translate-y-1/2 before:mt-4 '>
						Bootstrap
					</li>
					<li className=' relative pl-4 pt-8 before:absolute before:w-[6px] before:h-[2px] before:bg-white before:inline-block before:top-1/2 before:left-0 before:-translate-y-1/2 before:mt-4 '>
						HTML / CSS
					</li>
					<li className=' relative pl-4 pt-8 before:absolute before:w-[6px] before:h-[2px] before:bg-white before:inline-block before:top-1/2 before:left-0 before:-translate-y-1/2 before:mt-4 '>
						SCSS
					</li>
					<li className=' relative pl-4 pt-8 before:absolute before:w-[6px] before:h-[2px] before:bg-white before:inline-block before:top-1/2 before:left-0 before:-translate-y-1/2 before:mt-4 '>
						FIGMA
					</li>
				</ul>
			</motion.div>
		</section>
	);
};

export default AboutSection;

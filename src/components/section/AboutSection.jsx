import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../Button";

const skills = [
	"React JS",
	"JavaScript",
	"TailwindCSS",
	"Bootstrap",
	"HTML / CSS",
	"SCSS",
	"FIGMA",
];

const AboutSection = () => {
	const parallaxContainerRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: parallaxContainerRef,
		offset: ["start end", "end start"],
	});

	const transformY = useTransform(scrollYProgress, [0, 1], [0, -500]);

	return (
		<section
			ref={parallaxContainerRef}
			className='max-w-[1440px] mx-auto px-4'>
			<motion.div
				style={{ y: transformY }}
				className='text-fluid-300 md:h-[90vh] flex flex-col justify-center mt-[10vw]'>
				<motion.p
					initial={{ opacity: 0, y: 200 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "20%" }}
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

				<Button text={"more about me"} />
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "20%" }}
				transition={{
					duration: 0.6,
				}}
				style={{ y: transformY }}
				className='text-white/70 max-w-[600px] ml-auto mt-[10vw]'>
				<h2 className='text-white uppercase text-5xl font-semibold'>
					expertises
				</h2>
				<ul className='sm:columns-2 pt-4 text-fluid-200'>
					{skills.map((skill) => (
						<li className='relative pl-4 pt-8 before:absolute before:w-[6px] before:h-[2px] before:bg-white before:inline-block before:top-1/2 before:left-0 before:-translate-y-1/2 before:mt-4 '>
							{skill}
						</li>
					))}
				</ul>
			</motion.div>
		</section>
	);
};

export default AboutSection;

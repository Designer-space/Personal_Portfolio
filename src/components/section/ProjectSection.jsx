import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import project1 from "../../assets/project1.jpg";
import project1_Desktop from "../../assets/project1_desktop.jpg";
import project2 from "../../assets/project2.jpg";
import project2_Desktop from "../../assets/project2_desktop.jpg";

const projects = [
	{
		title1: "Clone_OH",
		title2: ".Studio",
		src: project1,
	},
	{
		title1: "Portfolio",
		title2: "Template",
		src: project2,
	},
	{
		title1: "Clone_OH",
		title2: ".Studio",
		src: project1,
	},
	{
		title1: "Portfolio",
		title2: "Template",
		src: project2,
	},
];

const anim = {
	initial: { width: 0 },
	open: {
		width: "auto",
		transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
	},
	closed: { width: 0 },
};

const ProjectSection = () => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end 10%"],
	});

	const height = useTransform(scrollYProgress, [0, 1], [150, 0]);

	return (
		<div
			className=''
			ref={container}>
			<div className='max-w-[1240px] mx-auto flex items-center justify-center'>
				<div className='w-full flex flex-col gap-4 px-4 pt-[15vw]'>
					<p className='text-3xl py-8 text-center'>Featured Work</p>
					{projects.map((project, i) => {
						return (
							<Project
								key={i}
								project={project}
							/>
						);
					})}
				</div>
			</div>
			<motion.div
				transition={{ type: "spring", stiffness: 100 }}
				style={{ height }}
				className='bg-red-800 relative mt-[100px] transition-all duration-100 ease-[cubic-bezier(0.37,0,0.63,1)]'>
				<div className='h-[1550%] w-[120%] -left-[10%] rounded-b-[50%] bg-[#111111] absolute z-[1] shadow-xl '></div>
			</motion.div>
		</div>
	);
};

const Project = ({ project }) => {
	const [isActive, setIsActive] = useState(false);
	const { title1, title2, src } = project;
	return (
		<div
			onMouseEnter={() => {
				setIsActive(true);
			}}
			onMouseLeave={() => {
				setIsActive(false);
			}}
			className='py-[0.8vw] cursor-pointer w-full flex items-center justify-center border-t-2 border-white text-[clamp(1.65rem,_0.1183rem_+_6.5352vw,_6rem)] pt-4 last-of-type:border-b-2'>
			<p className='mr-[0.75vw]'>{title1}</p>
			<motion.div
				variants={anim}
				animate={isActive ? "open" : "closed"}
				className='overflow-hidden flex justify-center w-0'>
				<img
					src={src}
					className='w-[clamp(3.65rem,_0.2521rem_+_14.4977vw,_13.3rem)]'></img>
			</motion.div>
			<p className='ml-[0.75vw]'>{title2}</p>
		</div>
	);
};

export default ProjectSection;

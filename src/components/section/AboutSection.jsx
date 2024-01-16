import React from "react";
import { motion } from "framer-motion";
import Button from "../Button";
import RevealTextEffect from "../RevealTextEffect";

const skills = [
	"React JS",
	"JavaScript",
	"TailwindCSS",
	"Bootstrap",
	"HTML / CSS",
	"SCSS",
	"FIGMA",
];

const paragraph1 =
	"I'm a self-taught FrontEnd Developer with a focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. I've been working as a FrontEnd Developer for about 2 Years.";

const paragraph2 =
	"I'm currently working as a Fullstack Developer at Pentacl Design,	an advertising agency with devotion to slick Design, in mumbai.";

const AboutSection = () => {
	return (
		<section className='max-w-[1240px] mx-auto px-4'>
			<div className='text-fluid-300 md:h-[90vh] flex flex-col justify-center gap-12'>
				<RevealTextEffect text={paragraph1} />
				<RevealTextEffect text={paragraph2} />
				<Button text={"more about me"} />
			</div>

			<motion.div
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "20%" }}
				transition={{
					duration: 1,
				}}
				className='text-white/70 max-w-[600px] ml-auto'>
				<h2 className='text-white uppercase text-5xl font-semibold'>
					expertises
				</h2>
				<ul className='sm:columns-2 pt-4 text-fluid-200'>
					{skills.map((skill, i) => (
						<li
							key={i}
							className='relative pl-4 pt-8 before:absolute before:w-[6px] before:h-[1px] before:bg-white before:inline-block before:top-1/2 before:left-0 before:-translate-y-1/2 before:mt-4 '>
							{skill}
						</li>
					))}
				</ul>
			</motion.div>
		</section>
	);
};

export default AboutSection;

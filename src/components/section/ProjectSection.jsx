import React from "react";
import project1 from "../../assets/project1.jpg";
import project1_Desktop from "../../assets/project1_desktop.jpg";
import project2 from "../../assets/project2.jpg";
import project2_Desktop from "../../assets/project2_desktop.jpg";
import Card from "../Card";

const projects = [
	{
		smImages: project1,
		desktopImages: project1_Desktop,
		title: "Clone_OH.Studio",
		lang: ["React", "TailwindCSS", "Framer Motion"],
	},
	{
		smImages: project2,
		desktopImages: project2_Desktop,
		title: "Portfolio Template",
		lang: ["HTML", "CSS", "JS"],
	},
	{
		smImages: project1,
		desktopImages: project1_Desktop,
		title: "Clone_OH.Studio",
		lang: ["React", "TailwindCSS", "Framer Motion"],
	},
	{
		smImages: project2,
		desktopImages: project2_Desktop,
		title: "Clone_OH.Studio",
		lang: ["HTML", "CSS", "JS"],
	},
];

const ProjectSection = () => {
	return (
		<section className='max-w-[1440px] mx-auto px-4 sm:px-8 relative'>
			<div className='text-white uppercase text-5xl font-semibold my-8'>
				<p className=''>Recent Work</p>
			</div>
			<div className='mt-[7vw]'>
				<Card projects={[projects[0], projects[1]]} />
				<Card
					projects={[projects[2], projects[3]]}
					reversed={true}
				/>
			</div>
		</section>
	);
};

export default ProjectSection;

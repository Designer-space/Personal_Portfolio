import React from "react";
import Header from "../components/header/Header";
import Navbar from "../components/header/Navbar";
import HeroSection from "../components/section/HeroSection";
import AboutSection from "../components/section/AboutSection";
import ProjectSection from "../components/section/ProjectSection";
import FloatingShape from "../components/FloatingShape";

const HomePage = () => {
	return (
		<>
			<div className='overflow-hidden'>
				<Header />
				<HeroSection />
				{/* <Navbar /> */}
				<AboutSection />
				<ProjectSection />
				<FloatingShape />
			</div>
		</>
	);
};

export default HomePage;

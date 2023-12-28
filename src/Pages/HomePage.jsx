import React from "react";
import Header from "../components/header/Header";
import Navbar from "../components/header/Navbar";
import HeroSection from "../components/section/HeroSection";
import AboutSection from "../components/section/AboutSection";
import ProjectSection from "../components/section/ProjectSection";

const HomePage = () => {
	return (
		<>
			<Header />
			<HeroSection />
			<Navbar />
			<AboutSection />
			<ProjectSection />
		</>
	);
};

export default HomePage;

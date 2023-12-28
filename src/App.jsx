import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "./components/header/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProjectPage from "./Pages/ProjectPage";
import "./index.css";

function App() {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});

	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				/>
				<Route
					path='/About'
					element={<AboutPage />}
				/>
				<Route
					path='/Projects'
					element={<ProjectPage />}
				/>
			</Routes>
			<div className='fixed-bg'></div>
		</>
	);
}

export default App;

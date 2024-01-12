import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from "./Model";
import { useMotionValue, useSpring } from "framer-motion";

const FloatingShape = () => {
	const mouse = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	};

	const smoothMouse = {
		x: useSpring(mouse.x, { stiffness: 75, damping: 100, mass: 3 }),
		y: useSpring(mouse.y, { stiffness: 75, damping: 100, mass: 3 }),
	};

	const manageMouseMoveMove = (e) => {
		const { clientX, clientY } = e;
		const { innerWidth, innerHeight } = window;
		const x = clientX / innerWidth;
		const y = clientY / innerHeight;
		mouse.x.set(x);
		mouse.y.set(y);
	};

	useEffect(() => {
		window.addEventListener("mousemove", manageMouseMoveMove);

		return () => {
			window.removeEventListener("mousemove", manageMouseMoveMove);
		};
	}, []);

	return (
		<div className='flex h-screen'>
			<Canvas
				orthographic
				camera={{ position: [0, 0, 200], zoom: 8 }}>
				<Model mouse={smoothMouse} />
				<Environment preset='studio' />
			</Canvas>
		</div>
	);
};

export default FloatingShape;

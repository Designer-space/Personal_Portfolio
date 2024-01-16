import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from "./Model";
import {
	useMotionValue,
	useSpring,
	useScroll,
	useTransform,
} from "framer-motion";
import Button from "./Button";

const FloatingShape = () => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end end"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

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
		<div
			ref={container}
			style={{ y }}
			className='flex h-screen bg-blue-300 relative'>
			<Canvas
				orthographic
				camera={{ position: [0, 0, 200], zoom: 8 }}>
				<Model mouse={smoothMouse} />
				<Environment preset='studio' />
			</Canvas>

			<div className='absolute top-2/4 left-2/4 -translate-y-1/2	-translate-x-1/2	 '>
				<Button text='Contact Me' />
			</div>
		</div>
	);
};

export default FloatingShape;

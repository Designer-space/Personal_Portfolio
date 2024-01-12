import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const RevealTextEffect = ({ text }) => {
	const splitText = text.split(" ");

	const textReveal = useRef(null);

	const { scrollYProgress } = useScroll({
		target: textReveal,
		offset: ["start 85%", "end 80%"],
	});

	return (
		<p
			className='flex text-fluid-300 leading-none max-w-[950px] text-white flex-wrap'
			ref={textReveal}>
			{splitText.map((word, i) => {
				const start = i / splitText.length;
				const end = start + 1 / splitText.length;
				return (
					<Word
						key={i}
						progress={scrollYProgress}
						range={[start, end]}>
						{word}
					</Word>
				);
			})}
		</p>
	);
};

const Word = ({ children, progress, range }) => {
	const opacity = useTransform(progress, range, [0, 1]);
	return (
		<span className='relative mr-[10px] mt-3'>
			<span className='absolute opacity-20'>{children}</span>
			<motion.span style={{ opacity: opacity }}>{children}</motion.span>
		</span>
	);
};

export default RevealTextEffect;

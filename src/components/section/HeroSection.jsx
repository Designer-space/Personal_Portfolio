import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
	const myref = useRef();
	const { scrollYProgress } = useScroll({
		target: myref,
		offset: ["start start", "end start"],
	});
	const scale = useTransform(scrollYProgress, [0, 1], [1, 200]);

	return (
		<section>
			<div
				ref={myref}
				className='overflow-hidden w-full h-[200vh] flex items-start justify-center'>
				<motion.div
					style={{ scale: scale }}
					className='w-full max-w-[70vw] mx-auto h-screen flex items-center justify-center origin-[52%_50%] '>
					<div className='w-full relative isolate'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='100%'
							height='100%'
							viewBox='0 0 1920 946'>
							<path
								fill='#FFFFFF'
								d='M66.546,596.874q2.476,24.279,3.383,26.094a2.885,2.885,0,0,0,2.706,1.813H94.283a3.544,3.544,0,0,0,3.383-1.587q0.9-1.582,2.933-19.274L135.07,317.148q1.812-16.334,6.575-23.365a11.622,11.622,0,0,1,8.388-4.765,3.07,3.07,0,0,0,1.927-.907,2.745,2.745,0,0,0,.567-1.813,2.34,2.34,0,0,0-2.494-2.494H115.714q-2.508,1.589-2.5,2.947a3.048,3.048,0,0,0,1.36,2.721l7.255,0.68a8.794,8.794,0,0,1,5.895,4.761q2.04,3.856,2.04,11.335a44.97,44.97,0,0,1-.453,6.348L102.441,540.671,82.6,289.472h13.83a2.588,2.588,0,0,0,2.04-.762,3.006,3.006,0,0,0,.68-2.072,2.74,2.74,0,0,0-.793-2.069,2.68,2.68,0,0,0-1.927-.765H24.108a2.668,2.668,0,0,0-1.927.765,3.1,3.1,0,0,0,0,4.141,2.666,2.666,0,0,0,1.927.762H35.67Zm123.5,22.24H174.631q-2.5,1.53-2.494,2.833t2.494,2.834h75.5q2.263-1.306,2.267-2.834,0-1.307-2.267-2.833h-13.6V289.472h13.6a2.622,2.622,0,0,0,1.927-.794,2.913,2.913,0,0,0,.793-2.154,2.708,2.708,0,0,0-2.72-2.72H176.445a2.27,2.27,0,0,0-1.814.793,3.208,3.208,0,0,0-.68,2.154,2.856,2.856,0,0,0,.68,1.927,2.261,2.261,0,0,0,1.814.794h13.6V619.114Zm203.571-85.925L347.822,283.8H289.1a2.709,2.709,0,0,0-2.721,2.72,2.9,2.9,0,0,0,.794,2.154,2.608,2.608,0,0,0,1.927.794h12.7V594.855q-0.681,12.471-3.288,16.777t-9.635,7.028a16.728,16.728,0,0,0-3.968,1.927,2.309,2.309,0,0,0-.566,1.7,2.729,2.729,0,0,0,.566,1.813,1.822,1.822,0,0,0,1.474.68h40.128q2.263,0,2.834-.566a3.508,3.508,0,0,0,.567-2.381,2.919,2.919,0,0,0-1.133-2.72l-10.2-.907a13.419,13.419,0,0,1-8.161-6.462q-2.5-4.644-2.494-16.21V314.183l56.522,310.6h35.07V313.712q0.681-12,3.4-16.422t9.749-7.138a16.612,16.612,0,0,0,3.967-1.927,2.312,2.312,0,0,0,.567-1.7,3.251,3.251,0,0,0-.567-1.927,1.741,1.741,0,0,0-1.474-.793H375.028q-2.268,0-2.834.68a4.021,4.021,0,0,0-.567,2.494q0,2.04,1.134,2.494l9.749,0.906a14.521,14.521,0,0,1,8.388,6.348q2.721,4.539,2.721,14.964v221.5ZM463.2,586.467q-2.269,18.363-7.709,26.3a14.472,14.472,0,0,1-10.2,5.894l-2.72.907a3.671,3.671,0,0,0-.68,2.267,2.9,2.9,0,0,0,.793,2.154,2.61,2.61,0,0,0,1.927.793h38.768a2.62,2.62,0,0,0,1.927-.793,2.913,2.913,0,0,0,.794-2.154,3.076,3.076,0,0,0-.911-2.267l-3.645-1.134a15.627,15.627,0,0,1-10.368-6.234q-3.762-5.1-3.759-15.084,0-3.177.227-6.125l4.7-36.49h41.645l5.887,64.614H509a2.305,2.305,0,0,0-1.814.765,3.492,3.492,0,0,0,0,4.141,2.3,2.3,0,0,0,1.814.761h68.241q2.491-1.524,2.494-2.834t-2.494-2.833h-10.2L526.611,288.565h-25Zm49.756-37.861H473.106l22.629-175.477Zm138.4,70.508H632.539a2.305,2.305,0,0,0-1.814.765,3.492,3.492,0,0,0,0,4.141,2.3,2.3,0,0,0,1.814.761H716.2a2.675,2.675,0,0,0,1.927-.761,3.1,3.1,0,0,0,0-4.141,2.678,2.678,0,0,0-1.927-.765h-17.91V455.667l31.673-140.935q4.3-19.394,15.643-25.941,2.72-1.812,2.72-3.4l-0.68-1.134a8.619,8.619,0,0,0-3.4-.453H707.269q-2.523,1.419-2.522,3.071a2.66,2.66,0,0,0,1.36,2.6l7.482,0.9a13.949,13.949,0,0,1,7.482,7.06q2.72,5.265,2.72,13.78a54.9,54.9,0,0,1-1.587,12.547L695.735,444.2l-35.2-154.732h18.137q2.493-1.525,2.494-3.054,0-1.085-2.494-2.614H604.986a2.505,2.505,0,0,0-1.814.655,2.932,2.932,0,0,0-.68,2.179,3.008,3.008,0,0,0,.68,2.072,2.3,2.3,0,0,0,1.814.762h9.069l37.3,166.2V619.114ZM873.5,594.855q0,10.882-3.4,16.777-2.5,4.31-9.522,7.028a16.728,16.728,0,0,0-3.968,1.927,2.309,2.309,0,0,0-.567,1.7,2.729,2.729,0,0,0,.567,1.813,1.822,1.822,0,0,0,1.474.68h40.128q2.264,0,2.834-.566a3.508,3.508,0,0,0,.567-2.381,2.918,2.918,0,0,0-1.134-2.72l-10.2-.907a13.752,13.752,0,0,1-8.275-6.8q-2.38-4.761-2.38-16.55V307.382l32.647,309.464q0.679,6.121,1.36,7.029a2.385,2.385,0,0,0,2.04.906h14.737a2.386,2.386,0,0,0,2.04-.906q0.679-.9,1.587-7.029l39.9-312.638V619.114H958.29a2.419,2.419,0,0,0-1.7.765,3.1,3.1,0,0,0,0,4.141,2.413,2.413,0,0,0,1.7.761h74.59a1.337,1.337,0,0,0,1.13-.651,3.476,3.476,0,0,0,.46-1.963,4.889,4.889,0,0,0-.68-2.618,0.942,0.942,0,0,0-.91-0.435h-14.74V289.472h14.74a3.321,3.321,0,0,0,2.27-.794,2.724,2.724,0,0,0,.9-2.154,2.484,2.484,0,0,0-.9-1.927,3.335,3.335,0,0,0-2.27-.793H971.227l-27.9,207.9L921.619,283.8H860.127a2.631,2.631,0,0,0-1.931.793,2.907,2.907,0,0,0-.793,2.154,2.709,2.709,0,0,0,2.72,2.721H873.5V594.855Zm210.831-8.388q-2.28,18.363-7.71,26.3a14.475,14.475,0,0,1-10.21,5.894l-2.72.907a3.7,3.7,0,0,0-.68,2.267,2.909,2.909,0,0,0,.8,2.154,2.61,2.61,0,0,0,1.92.793h38.77a2.617,2.617,0,0,0,1.93-.793,2.9,2.9,0,0,0,.79-2.154,3.059,3.059,0,0,0-.91-2.267l-3.64-1.134a15.613,15.613,0,0,1-10.37-6.234q-3.765-5.1-3.76-15.084,0-3.177.23-6.125l4.7-36.49h41.65l5.88,64.614h-10.88a2.288,2.288,0,0,0-1.81.765,3.492,3.492,0,0,0,0,4.141,2.285,2.285,0,0,0,1.81.761h68.24c1.66-1.016,2.5-1.962,2.5-2.834s-0.84-1.813-2.5-2.833h-10.2l-40.43-330.549h-25Zm49.75-37.861h-39.85l22.63-175.477Zm110.51,19.685q0,31.987,9.98,43.557,14.28,16.333,46.25,16.334,25.38,0,38.88-13.61,13.485-13.613,13.49-39.93V318.509q0-16.557,4.31-23.819a9.393,9.393,0,0,1,7.03-5.218,7.535,7.535,0,0,0,3.51-1.308,2.543,2.543,0,0,0,1.02-1.962c-1.35-1.6-2.48-2.4-3.38-2.4h-35.63l-1.8.453-0.45,1.587a3.677,3.677,0,0,0,1.24,2.607q1.245,1.249,5.33,2.154,7.935,1.818,10.77,6.461t2.84,21.652V568.33q0,27.661-10.63,40.468t-26.85,12.809q-8.925,0-14.17-5.218-5.265-5.217-5.26-14.747V289.472h12.7a2.3,2.3,0,0,0,1.81-.762,3.373,3.373,0,0,0,.68-2.292,2.7,2.7,0,0,0-.68-1.849,2.3,2.3,0,0,0-1.81-.765h-72.56q-2.49,1.53-2.49,2.834c0,0.729.83,1.672,2.5,2.834h13.37V568.291Zm169.79,50.823h-13.37a3.389,3.389,0,0,0-2.27.765,2.81,2.81,0,0,0,0,4.141,3.386,3.386,0,0,0,2.27.761h71.41a4.243,4.243,0,0,0,2.84-.871,2.4,2.4,0,0,0,0-3.925,4.243,4.243,0,0,0-2.84-.871h-11.11V452.479q16.65,0,21.15,2.947,7.65,5.219,7.65,20.631V595.989q0,15.42,8.36,23.8t24.64,8.388a38.813,38.813,0,0,0,30.4-13.716q12.09-13.715,12.09-38.882,0-4.983-1.13-6.8a2.64,2.64,0,0,0-2.27-1.587,2.782,2.782,0,0,0-2.15,1.36q-1.02,1.36-1.25,5.441-1.59,23.583-7.48,32.647-3.63,5.67-8.16,5.668a5.785,5.785,0,0,1-4.76-2.263q-1.815-2.265-1.82-7.932V519.189q0-21.3-6.64-34.666t-20.36-22.884q-8.1-5.664-28.81-11.782,18.525-6.349,27.35-13.156a70.9,70.9,0,0,0,22.14-28.81q7.455-17.466,7.46-39.927,0-39.012-19.47-61.588T1472.3,283.8H1401q-2.49,1.361-2.49,2.72c0,1.059.83,2.041,2.5,2.948h13.37V619.114ZM1472.34,289.7q10.56,0,14.17,3.854t3.6,14.057V425.273q0,10.431-4.95,15.87a16.541,16.541,0,0,1-12.82,5.441h-11.03V289.7h11.03Zm166.02,329.416h-18.82a2.288,2.288,0,0,0-1.81.765,3.492,3.492,0,0,0,0,4.141,2.285,2.285,0,0,0,1.81.761h83.66a2.688,2.688,0,0,0,1.93-.761,3.108,3.108,0,0,0,0-4.141,2.692,2.692,0,0,0-1.93-.765h-17.91V455.667l31.67-140.935q4.3-19.394,15.65-25.941,2.715-1.812,2.72-3.4l-0.68-1.134a8.659,8.659,0,0,0-3.41-.453h-36.97q-2.52,1.419-2.52,3.071a2.653,2.653,0,0,0,1.36,2.6l7.48,0.9a13.912,13.912,0,0,1,7.48,7.06q2.73,5.265,2.72,13.78a55.211,55.211,0,0,1-1.58,12.547L1682.74,444.2l-35.2-154.732h18.14q2.49-1.525,2.49-3.054,0-1.085-2.49-2.614h-73.69a2.486,2.486,0,0,0-1.81.655,2.9,2.9,0,0,0-.68,2.179,2.975,2.975,0,0,0,.68,2.072,2.286,2.286,0,0,0,1.81.762h9.07l37.3,166.2V619.114Zm140.09-32.647q-2.265,18.363-7.71,26.3a14.474,14.474,0,0,1-10.2,5.894l-2.72.907a3.7,3.7,0,0,0-.68,2.267,2.9,2.9,0,0,0,.79,2.154,2.617,2.617,0,0,0,1.93.793h38.77a2.649,2.649,0,0,0,1.93-.793,2.943,2.943,0,0,0,.79-2.154,3.1,3.1,0,0,0-.91-2.267l-3.65-1.134a15.659,15.659,0,0,1-10.37-6.234q-3.75-5.1-3.75-15.084,0-3.177.22-6.125l4.71-36.49h41.64l5.89,64.614h-10.88a2.324,2.324,0,0,0-1.82.765,3.492,3.492,0,0,0,0,4.141,2.321,2.321,0,0,0,1.82.761h68.24q2.49-1.524,2.49-2.834t-2.49-2.833h-10.2l-40.43-330.549h-25Zm49.76-37.861h-39.85l22.62-175.477Z'
							/>
						</svg>
						<div className='text-fluid-100 uppercase absolute right-0 bottom-[clamp(-0.5rem,-2.4366rem+8.2629vw,5rem)] flex gap-2 sm:gap-4'>
							<p>&#8600;</p>
							<p>
								Frontend Developer, <br />
								based in Mumbai, India
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;

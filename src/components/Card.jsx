import React, { useRef } from "react";

const Card = ({ projects, reversed }) => {
	const firstImage = useRef(null);
	const secondImage = useRef(null);
	let requestAnimationFrameId = null;
	let xPercent = reversed ? 100 : 0;
	let currentXPercent = reversed ? 100 : 0;
	const speed = 0.15;

	const manageMouseMove = (e) => {
		if (window.innerWidth < 640) {
		} else {
			const { clientX } = e;
			xPercent = (clientX / window.innerWidth) * 100;

			if (!requestAnimationFrameId) {
				requestAnimationFrameId = window.requestAnimationFrame(animate);
			}
		}
		// console.log(requestAnimationFrameId);
	};

	const animate = () => {
		//Add easing to the animation
		const xPercentDelta = xPercent - currentXPercent;
		currentXPercent = currentXPercent + xPercentDelta * speed;

		//Change width of images between 33.33% and 66.66% based on cursor
		const firstImagePercent = 66.66 - currentXPercent * 0.33;
		const secondImagePercent = 33.33 + currentXPercent * 0.33;
		firstImage.current.style.width = `${firstImagePercent}%`;
		secondImage.current.style.width = `${secondImagePercent}%`;

		if (Math.round(xPercent) == Math.round(currentXPercent)) {
			window.cancelAnimationFrame(requestAnimationFrameId);
			requestAnimationFrameId = null;
		} else {
			window.requestAnimationFrame(animate);
		}
	};

	return (
		<div
			onMouseMove={(e) => {
				manageMouseMove(e);
			}}
			className='double'>
			<div
				ref={firstImage}
				className='imageContainer'>
				<div className='stretchyWrapper'>
					<img
						src={projects[0].desktopImages}
						alt={"image"}
					/>
					<div className='body'>
						<h3 className='text-[2em] font-semibold my-4'>
							{projects[0].title}
						</h3>

						<div className='flex flex-wrap gap-4 pl-4'>
							{projects[0].lang.map((e, i) => {
								return (
									<p
										key={i}
										className='border w-[18%] min-w-max px-4 py-2 text-center rounded-lg text-[.9em]'>
										{e + " "}
									</p>
								);
							})}
						</div>

						<p>{projects[0].year}</p>
					</div>
				</div>
			</div>

			<div
				ref={secondImage}
				className='imageContainer'>
				<div className='stretchyWrapper'>
					<img
						src={projects[1].desktopImages}
						alt={"image"}
					/>
					<div className='body'>
						<h3 className='text-[2em] font-semibold my-4'>
							{projects[1].title}
						</h3>

						<div className='flex flex-wrap gap-4 pl-4'>
							{projects[1].lang.map((e, i) => {
								return (
									<p
										key={i}
										className='border w-[18%] min-w-max px-4 py-2 text-center rounded-lg text-[.9em]'>
										{e + " "}{" "}
									</p>
								);
							})}
						</div>

						<p>{projects[1].year}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;

import React, { useRef } from "react";
import { Link } from "react-router-dom";
import MagneticWrapper from "../MagneticWrapper";

const Header = () => {
	return (
		<header className='hidden w-full sm:flex justify-between items-center py-4 px-10 absolute top-0'>
			<div className=''>
				<p>VINAY</p>
			</div>
			<nav>
				<ul className='flex gap-8 text-2xl uppercase'>
					<MagneticWrapper>
						<li className='relative p-4 flex items-center justify-center cursor-pointer before:w-[8px] before:h-[8px] before:rounded-full before:bg-transparent before:block before:absolute before:-bottom-3 hover:before:bg-white before:scale-0 hover:before:scale-100 transition-all before:duration-300'>
							<Link to={"/About"}>About</Link>
						</li>
					</MagneticWrapper>
					<MagneticWrapper>
						<li className='p-4 flex items-center justify-center cursor-pointer before:w-[8px] before:h-[8px] before:rounded-full before:bg-transparent before:block before:absolute before:-bottom-3 hover:before:bg-white before:scale-0 hover:before:scale-100 transition-all before:duration-300'>
							<Link to={"/Projects"}>Project</Link>
						</li>
					</MagneticWrapper>
					<MagneticWrapper>
						<li className='p-4 flex items-center justify-center cursor-pointer before:w-[8px] before:h-[8px] before:rounded-full before:bg-transparent before:block before:absolute before:-bottom-3 hover:before:bg-white before:scale-0 hover:before:scale-100 transition-all before:duration-300'>
							<Link to={"#Footer"}>Contact</Link>
						</li>
					</MagneticWrapper>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

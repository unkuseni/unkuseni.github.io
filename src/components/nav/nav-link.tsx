// src/components/nav/nav-link.tsx
import React, { useEffect, useState } from "react";

interface NavLinkProps {
	title?: string;
	digits?: string;
	textNum?: string;
	isOpen: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
	title = "where",
	digits = "000",
	textNum = "zero",
	isOpen,
}) => {
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		if (isOpen) {
			setAnimate(true);
		} else {
			setAnimate(false);
		}
	}, [isOpen]);

	return (
		<div className='p-6 border-t border-white'>
			<div className='w-full uppercase flex justify-between'>
				<span>chapter</span>
				<span>{digits}</span>
				<span>{textNum}</span>
			</div>
			<a
				className='mx-auto text-center text-[29vw] leading-[27vh] font-caslon font-bold uppercase'
				href={`#${title}`}
			>
				<p className='mx-auto'>
					{title?.split("").map((char, index) => (
						<span
							key={index}
							className={`inline-block origin-bottom transform transition-all duration-1000 ease-out ${
								animate ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
							}`}
							style={{
								transitionDelay: `${index * 100}ms`,
							}}
						>
							{char}
						</span>
					))}
				</p>
			</a>
		</div>
	);
};

export default NavLink;

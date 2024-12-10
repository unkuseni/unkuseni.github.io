import { useState } from "react";
import NavLink from "./nav-link";

interface NavbarProps {
	title: string;
	navLinks: [
		{
			title: string;
			digits: string;
			textNum: string;
		}
	];
}

const Navbar: React.FC<NavbarProps> = ({
	title = "underConstruction",
	navLinks = [
		{
			title: "why",
			digits: "001",
			textNum: "one",
		},
		{
			title: "who",
			digits: "002",
			textNum: "two",
		},
		{
			title: "what",
			digits: "003",
			textNum: "three",
		},
		{
			title: "how",
			digits: "004",
			textNum: "four",
		},
		{
			title: "connect",
			digits: "005",
			textNum: "five",
		},
	],
}) => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<header className={`w-full bg-transparent absolute top-0 z-20`}>
				<nav className='w-full'>
					<div id='nav-title' className={`p-5 relative z-20`}>
						<div className='flex justify-between w-full items-center'>
							<button
								onClick={() => setOpen(!open)}
								className='backdrop-blur-lg bg-[rgba(255,255,255,.05)] cursor-pointer p-6 rounded-[100px]'
							>
								<span className='uppercase text-lg font-semibold'>
									{open ? "close" : "menu"}
								</span>
							</button>
							<h2 className='uppercase text-xl font-semibold font-caslon hidden'>
								{title}
							</h2>
							<button className='backdrop-blur-lg bg-[rgba(255,255,255,.05)] cursor-pointer p-6 rounded-[100px]'>
								<span className='uppercase text-lg font-semibold'>connect</span>
							</button>
						</div>
					</div>
					<div
						className={`bg-blue-500 absolute top-0 h-screen overflow-auto w-screen pt-32 transition-all duration-700 ${
							open ? "translate-x-0" : "-translate-x-[101%]"
						}`}
					>
						{navLinks.map(({ title, digits, textNum }, index) => (
							<NavLink
								title={title}
								digits={digits}
								textNum={textNum}
								isOpen={open}
								onClick={() => setOpen(false)}
								key={index}
							/>
						))}
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navbar;

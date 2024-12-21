import { useState } from "react";
import NavLink from "./nav-link";

interface NavbarProps {
	title: string;
	navLinks?: [
		{
			title: string;
			digits: string;
			textNum: string;
		},
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
			<header className="w-full bg-transparent absolute md:relative top-0 z-20">
				<nav className="w-full">
					<div id="nav-title" className="p-5 relative z-20">
						<div className="flex justify-between w-full items-center">
							<button
								type="button"
								onClick={() => setOpen(!open)}
								className="backdrop-blur-lg bg-[rgba(255,255,255,.05)] cursor-pointer p-6 rounded-[100px] md:hidden"
							>
								<span className="uppercase text-lg font-semibold">
									{open ? "close" : "menu"}
								</span>
							</button>
							<h2 className="uppercase p-6 text-xl tracking-widest text-white font-semibold font-editorial italic opacity-0 sm:opacity-100 transition duration-700">
								{title}
							</h2>
							<ul className="flex max-md:hidden w-2/5 items-center justify-between uppercase font-bold text-xl">
								{navLinks.map(({ title, digits, textNum }) => {
									return (
										<li className="hover:backdrop-blur-lg hover:bg-[rgba(255,255,255,.05)] cursor-pointer hover:text-green-500 p-6 rounded-[100px]">
											<a href={`#${title}`}>{title}</a>
										</li>
									);
								})}
							</ul>
							<button
								className="backdrop-blur-lg bg-[rgba(255,255,255,.05)] cursor-pointer p-6 rounded-[100px]"
								type="button"
							>
								<span className="uppercase text-lg font-semibold">connect</span>
							</button>
						</div>
					</div>
					<div
						className={`bg-blue-500 absolute top-0 h-screen overflow-auto w-screen pt-32 transition-all duration-700 sm:hidden ${
							open ? "translate-x-0" : "-translate-x-[101%]"
						}`}
					>
						{navLinks.map(({ title, digits, textNum }) => (
							<NavLink
								title={title}
								digits={digits}
								textNum={textNum}
								isOpen={open}
								onClick={() => setOpen(false)}
								key={title}
							/>
						))}
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navbar;

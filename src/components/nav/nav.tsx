import { useState } from "react";
import NavLink from "./nav-link";

interface NavbarProps {
	title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title = "underConstruction" }) => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<header className={`w-full bg-transparent absolute top-0 z-20`}>
				<nav className='container'>
					<div id='nav-title' className={`p-5 relative z-20`}>
						<div className='flex justify-between w-full'>
							<button
								onClick={() => setOpen(!open)}
								className='backdrop-blur-lg bg-[rgba(255,255,255,.05)] cursor-pointer p-6 rounded-[100px]'
							>
								<span className='uppercase text-sm'>
									{open ? "close" : "menu"}
								</span>
							</button>
							<h2 className='uppercase text-xl hidden'>{title}</h2>
							<button className='backdrop-blur-lg bg-[rgba(255,255,255,.05)] cursor-pointer p-6 rounded-[100px]'>
								<span className='uppercase text-sm'>connect</span>
							</button>
						</div>
					</div>
					<div
						className={`bg-blue-500 absolute top-0 w-screen h-auto pt-32 transition-transform duration-700 ${
							open ? "translate-x-0" : "-translate-x-[101%]"
						}`}
					>
						<NavLink title={"why"} digits="001" textNum='one' isOpen={open}/>
						<NavLink title={"who"} digits="002" textNum='two' isOpen={open}/>
						<NavLink title="what" digits="003" textNum='three' isOpen={open}/>
						<NavLink title="how" digits="004" textNum='four' isOpen={open}/>
						<NavLink title="connect" digits="005" textNum='five' isOpen={open}/>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navbar;

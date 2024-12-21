import { Drawer, VerticalDrawer } from "@/components/drawer/drawer";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/nav/nav";
import Why from "@/components/sections/why";

const Home = () => {
	return (
		<>
			<div className="bg-hero-pattern bg-center bg-no-repeat">
				<Navbar title="unkuseni's portfolio" />
				<div className="md:flex relative md:overflow-x-auto md:border-t border-t-white">
					<Hero />
					<Drawer className="md:hidden" />
					<VerticalDrawer className="md:flex hidden" />
					<Why />
				</div>
			</div>
		</>
	);
};

export default Home;

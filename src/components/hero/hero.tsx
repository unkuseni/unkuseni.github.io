import DefaultNav from "../nav/nav";

const Hero = () => {
	return (
		<>
			<div
				class={`min-w-[100vw] min-h-[calc(100vh-320px)] bg-hero bg-cover sm:bg-hero-desktop bg-center  bg-no-repeat sm:min-w-[calc(100vw-320px)] sm:h-[100vh] `}
			>
				<DefaultNav menuText='menu' contactText='talk' />
			</div>
		</>
	);
};

export default Hero;

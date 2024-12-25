import SectionHeader from "./section-header";
import { useInView } from "@/hooks/useInView";

const Why = () => {
	const [sectionRef, isInView] = useInView({
		threshold: 0.2, // Trigger when 20% of element is visible
	});

	const title = "why";

	return (
		<>
			<section
				ref={sectionRef as React.RefObject<HTMLElement>}
				className='relative max-sm:pt-5 sm:flex flex-shrink-0 max-sm:bg-[url("/bkg.png")] bg-center bg-no-repeat bg-cover sm:h-[calc(100vh-73px)]'
				id="why"
			>
				<div className="p-6 md:order-2 md:min-w-[576px] md:flex md:flex-col md:justify-center md:items-center">
					<SectionHeader digits="001" textNum="one" />
					<div className="overflow-hidden">
						<p className="mx-auto text-center text-[clamp(7rem,30vw,25rem)] leading-[2] font-caslon font-bold uppercase sm:flex">
							{title.split("").map((char, index) => (
								<span
									key={index}
									className="inline-block"
									style={{
										transform: isInView ? "scaleY(1)" : "scaleY(0)",
										opacity: isInView ? 1 : 0,
										transformOrigin: "bottom",
										transition:
											"transform 0.5s ease-out, opacity 0.5s ease-out",
										transitionDelay: `${index * 100}ms`,
									}}
								>
									{char}
								</span>
							))}
						</p>
					</div>
				</div>
				<article className="p-6 md:order-3 md:w-[576px] md:flex md:flex-col md:items-center md:justify-center md:flex-shrink-0 md:h-[600px] md:relative md:self-start md:gap-5">
					<div className="md:order-2 md:w-3/4">
						<h2 className="uppercase text-xl md:text-2xl font-bold">
							transforming ideas into software solutions
						</h2>
						<p
							className={`mt-5 leading-10 text-2xl md:text-3xl transition-opacity duration-700 ${
								isInView ? "opacity-100" : "opacity-0"
							}`}
						>
							This portfolio showcases{" "}
							<span className="font-playfair italic">
								custom software solutions and software developer
							</span>{" "}
							aimed at helping you turn your ideas into tech products.
						</p>
					</div>

					<img
						src="/why-2.jpg"
						alt=""
						className={`mt-10 w-full h-auto max-w-full object-cover transform transition-transform duration-500 ease-out bg-green-700 md:order-1 md:relative left-2/3 ${
							isInView ? "scale-[1]" : "scale-[0]"
						}`}
					/>
				</article>

				<img
					src="/why-1.jpg"
					alt=""
					className={`max-sm:mt-24 max-sm:mx-auto w-full sm:max-w-3xl h-auto object-cover transform transition-transform duration-500 ease-out bg-green-700 md:order-1 flex-shrink-0 ${
						isInView ? "scale-[1]" : "scale-[0]"
					}`}
				/>

				<article className="p-6 max-sm:mt-28 md:order-4 md:self-end md:mb-32 md:max-w-xl">
					<h2 className="uppercase text-xl md:text-2xl font-bold">
						a need to use leverage
					</h2>
					<p
						className={`mt-10 leading-10 text-2xl md:text-3xl transition-opacity duration-700 ${
							isInView ? "opacity-100" : "opacity-0"
						}`}
					>
						I believe that creative problem-solving and leveraging software
						solutions can empower growth in every project, regardless of
						complexity, scale and industry.
					</p>
					<p className="mt-10 leading-10 text-2xl md:text-3xl">
						No matter your current tech stack, development stage or business
						goals,{" "}
						<span className="font-playfair italic">
							I'm dedicated to stimulating your vision and using innovative
							ideas to help you achieve your goals.
						</span>
					</p>
				</article>
			</section>
		</>
	);
};

export default Why;


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
				className='max-sm:pt-5 sm:flex w-screen flex-shrink-0 max-sm:bg-[url("/bkg.png")] bg-center bg-no-repeat bg-cover sm:h-[calc(100vh-73px)]'
				id='why'
			>
				<div className='p-6'>
					<SectionHeader digits='001' textNum='one' />
					<div className='overflow-hidden'>
						<p className='mx-auto text-center text-2xl leading-[2] font-caslon font-bold uppercase sm:flex'>
							{title.split("").map((char, index) => (
								<span
									key={index}
									className='inline-block'
									style={{
										transform: isInView ? "scaleY(1)" : "scaleY(0)",
										opacity: isInView ? 1 : 0,
										transformOrigin: "bottom",
										transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
										transitionDelay: `${index * 100}ms`,
									}}
								>
									{char}
								</span>
							))}
						</p>
					</div>
				</div>
				<article className='p-6'>
					<h2 className='uppercase text-xl font-bold'>
						transforming ideas into software solutions
					</h2>
					<p
						className={`mt-5 leading-10 text-2xl transition-opacity duration-700 ${
							isInView ? "opacity-100" : "opacity-0"
						}`}
					>
						This portfolio showcases{" "}
						<span className='font-playfair italic'>
							custom software solutions and software developer
						</span>{" "}
						aimed at helping you turn your ideas into tech products.
					</p>
					<div className='bg-green-700'>
						<img
							src='https://picsum.photos/500/350'
							alt=''
							className={`mt-10 w-full h-auto max-w-full object-cover transform transition-transform duration-500 ease-out ${
								isInView ? "scale-[1]" : "scale-[0]"
							}`}
						/>
					</div>
				</article>
				<div className='bg-green-700'>
					<img
						src='https://picsum.photos/1000/1000'
						alt=''
						className={`max-sm:mt-24 w-full h-auto transform transition-transform duration-500 ease-out ${
							isInView ? "scale-[1]" : "scale-[0]"
						}`}
					/>
				</div>
				<article className='p-6 max-sm:mt-28'>
					<h2 className='uppercase text-xl font-bold'>
						a need to use leverage
					</h2>
					<p
						className={`mt-10 leading-10 text-2xl transition-opacity duration-700 ${
							isInView ? "opacity-100" : "opacity-0"
						}`}
					>
						I believe that creative problem-solving and leveraging software
						solutions can empower growth in every project, regardless of
						complexity, scale and industry.
					</p>
					<p className='mt-10 leading-10 text-2xl'>
						No matter your current tech stack, development stage or business
						goals,{" "}
						<span className='font-playfair italic'>
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

import SectionHeader from "./section-header";
import { useInView } from "@/hooks/useInView";

const Who = () => {
	const [sectionRef, isInView] = useInView({
		threshold: 0.05, // Trigger when 20% of element is visible
	});

	const title = "who";
	return (
		<>
			<section
				className='relative max-sm:pt-5 sm:flex flex-shrink-0 max-sm:bg-[url("/bkg.png")] bg-center bg-no-repeat bg-cover sm:h-[calc(100vh-73px)]'
				ref={sectionRef as React.RefObject<HTMLElement>}
				id="who"
			>
				<div className="p-6 md:min-w-[576px] md:flex md:flex-col md:justify-center md:items-center md:flex-shrink-0">
					<SectionHeader digits="002" textNum="two" />
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
				<article className="p-6 md:w-[576px] md:flex md:flex-col md:items-center md:justify-center md:flex-shrink-0 md:h-[600px] md:relative md:self-center md:gap-5">
					<h2 className="text-xl md:text-5xl font-bold uppercase md:tracking-wider">
						adeoye olaseni, chemist, software developer and tinkerer
					</h2>
					<p className="font-editorial text-2xl md:text-5xl mt-5 leading-10">
						"All my life, curiosity and taking things apart has helped me foster
						my creativity.
						<br />
						Software development is part of my ongoing journey of self-discovery
						that helps me understand the famous phrase, ordo ab chao.
						<br />
						My passion for unraveling the mysteries of the universe drives me
						forward. By combining my love for chemistry and coding, I aim to
						create solutions that bring order to chaos."
					</p>
				</article>

				<img
					src="/seni.jpeg"
					alt=""
					className={
						"max-sm:mt-24 max-sm:mx-auto w-full sm:max-w-3xl h-auto object-cover transform transition-transform duration-500 ease-out flex-shrink-0 bg-white"
					}
				/>

				<article className="p-6 max-sm:mt-28 md:flex md:gap-5">
					<div className="md:self-start md:mt-20">
						<h2 className="uppercase text-xl font-bold">tinkerer</h2>

						<p className="mt-10 leading-10 text-2xl max-w-3xl">
							"Stay curious, stay foolish. In the intersection of chemistry and
							code,{" "}
							<span className="font-playfair italic md:text-3xl">
								I've found that the most profound discoveries come from asking
								'what if?'
							</span>{" "}
							Just as molecules combine to create something new, I blend
							scientific thinking with software development to craft innovative
							solutions.
							<br />
							My journey is fueled by an insatiable desire to explore the
							unknown.
							<br />
							Every challenge presents an opportunity to innovate and grow.
							<br />
							By pushing the boundaries of what's possible, I strive to make a
							meaningful impact through technology."
						</p>
					</div>

					<img
						src="/tink.jpg"
						alt=""
						className={
							"max-sm:mt-24 max-sm:mx-auto w-full sm:max-w-3xl h-auto object-cover transform transition-transform duration-500 ease-out bg-white flex-shrink-0 md:self-end"
						}
					/>
				</article>


				<article className="p-6 mt-28">
					<h2 className="uppercase text-xl font-bold">the chemist</h2>

					<p className="mt-10 leading-10 text-2xl">
						"With a degree in Chemistry, my passion lies in exploring the
						molecular foundations of the world around us.
						<br />
						<span className="font-playfair italic">
							Unveiling the secrets of atoms and molecules has always inspired
							me.
						</span>
						<br />
						Just as reactions transform substances, I apply scientific
						principles to innovate and solve complex problems.
						<br />
						Merging my expertise in chemistry with software development, I
						strive to create solutions that advance both science and
						technology."
					</p>

					<img
						src="/engine.jpg"
						alt=""
						className={
							"max-sm:mt-24 max-sm:mx-auto w-full sm:max-w-3xl h-auto object-cover transform transition-transform duration-500 ease-out bg-white flex-shrink-0"
						}
					/>
				</article>
			</section>
		</>
	);
};

export default Who;

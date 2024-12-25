import SectionHeader from "./section-header";
import { useInView } from "@/hooks/useInView";
import { Drawer, VerticalDrawer } from "../drawer/drawer";

const How = () => {
	const [sectionRef, isInView] = useInView({
		threshold: 0.1, // Trigger when 20% of element is visible
	});

	const title = "how";
	return (
		<>
			<section
				className='relative max-sm:pt-5 sm:flex flex-shrink-0 max-sm:bg-[url("/bkg.png")] bg-center bg-no-repeat bg-cover sm:h-[calc(100vh-73px)] md:border-r border-r-white'
				ref={sectionRef as React.RefObject<HTMLElement>}
				id="how"
			>
				<div className="p-6 md:min-w-[576px] md:flex md:flex-col md:justify-center md:items-center">
					<SectionHeader digits="004" textNum="four" />
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
					<h2 className="text-xl font-bold uppercase">
						precision in every step
					</h2>
					<p className="font-editorial text-2xl mt-5 leading-10">
						Hey there! Let's team up to bring your ideas to life. We'll mix your
						know-how with my tech skills to create something awesome. I'm all
						about crafting software that's not just functional, but a joy to use
						– think smooth animations and snappy performance. And here's the
						deal: I'm 100% committed to working closely with you. Your input is
						gold, and I'm always ready to tweak and adjust until we nail it.
						Let's make some digital magic together!
					</p>
				</article>

				<img
					src="/stack.jpg"
					alt="stack of stones"
					className={
						"max-sm:mt-24 max-sm:mx-auto w-full sm:max-w-3xl h-auto object-cover transform transition-transform duration-500 ease-out bg-green-700 flex-shrink-0"
					}
				/>

				<Drawer
					title="stack & benefits"
					name="stack & benefits"
					className="md:hidden"
				/>
				<VerticalDrawer
					title="stack & benefits"
					name="stack & benefits"
					className="hidden md:flex"
				/>
				<article className="p-6 md:w-[576px] md:flex md:flex-col md:items-center md:justify-center md:flex-shrink-0 md:h-[600px] md:relative md:self-start md:gap-5">
					<h2 className="text-xl font-bold uppercase">
						understanding your needs
					</h2>
					<p className="font-editorial text-2xl mt-5 leading-10">
						I take the time to listen to what you want to achieve with your
						software project. We work together to identify your goals,
						challenges, and preferences. As we build your solution, I
						continuously test and refine it to ensure it meets your
						expectations. Whether it's improving your business operations or
						creating a better user experience, I'm committed to delivering a
						high-quality solution that works the way you need it to.
					</p>
					<h2 className="text-xl font-bold uppercase mt-5">my tech stack</h2>
					<p className="font-editorial text-2xl mt-5 leading-10">
						For smaller projects, I prefer working with vanilla JavaScript,
						which allows me to craft a tailored architecture that precisely
						matches each project's requirements. I complement this with powerful
						animation libraries like GSAP for fluid motion effects and Three.js
						for immersive 3D web experiences. When tackling larger projects, I
						utilize frameworks like Astro or Next.js to ensure optimal
						scalability and performance.
					</p>
				</article>
				<div className="md:self-end md:mb-32 md:text-3xl">
					<article className="p-6 md:w-[576px] md:flex md:flex-col md:items-center md:justify-center md:flex-shrink-0  md:relative md:self-center md:gap-5">
						<h2 className="text-2xl font-bold uppercase">
							<span className="text-sm">01.</span> interaction
						</h2>

						<p className="font-editorial text-2xl mt-5 leading-10 md:w-4/5">
							I craft engaging digital experiences that put users first. Through
							intuitive interactions and fluid animations, I transform static
							designs into dynamic interfaces, guiding visitors effortlessly and
							leaving lasting impressions that showcase my creative expertise.
						</p>
					</article>
					<article className="p-6 md:w-[576px] md:flex md:flex-col md:items-center md:justify-center md:flex-shrink-0 md:relative md:self-center md:gap-5">
						<h2 className="text-2xl font-bold uppercase">
							<span className="text-sm">02.</span> performance
						</h2>

						<p className="font-editorial text-2xl mt-5 leading-10 md:w-4/5">
							I prioritize lightning-fast, inclusive web experiences. By
							optimizing load times and adhering to WCAG standards, I ensure my
							sites are swift and accessible to all users, regardless of their
							devices or abilities, without compromising on visual appeal.
						</p>
					</article>
					<article className="p-6 md:w-[576px] md:flex md:flex-col md:items-center md:justify-center md:flex-shrink-0 md:relative md:self-center md:gap-5">
						<h2 className="text-2xl font-bold uppercase">
							<span className="text-sm">03.</span> teamwork
						</h2>

						<p className="font-editorial text-2xl mt-5 leading-10 md:w-4/5">
							I'm a team player who loves working with others. I communicate
							well, share what I know, and listen to different ideas. Together,
							we create awesome websites that work great and make users happy.
						</p>
					</article>
				</div>
			</section>
		</>
	);
};

export default How;

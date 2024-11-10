import React from "react";
import SectionHeader from "./section-header";
import { useInView } from "@/hooks/useInView";
import Drawer from "../drawer/drawer";

const How = () => {
	const [sectionRef, isInView] = useInView({
		threshold: 0.2, // Trigger when 20% of element is visible
	});

	const title = "how";
	return (
		<>
			<section
				className='bg-slate-700 text-white pt-5'
				ref={sectionRef as React.RefObject<HTMLElement>}
			>
				<div className='p-6'>
					<SectionHeader digits='004' textNum='four' />
					<div className='overflow-hidden'>
						<p className='mx-auto text-center text-[29vw] leading-[27vh] font-caslon font-bold uppercase'>
							{title.split("").map((char, index) => (
								<span
									key={index}
									className='inline-block'
									style={{
										transform: isInView ? "scaleY(1)" : "scaleY(0)",
										opacity: isInView ? 1 : 0,
										transformOrigin: "bottom",
										transition: `transform 0.5s ease-out, opacity 0.5s ease-out`,
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
					<h2 className='text-xl font-bold uppercase'>
						precision in every step
					</h2>
					<p className='font-editorial text-2xl mt-5 leading-10'>
						Hey there! Let's team up to bring your ideas to life. We'll mix your
						know-how with my tech skills to create something awesome. I'm all
						about crafting software that's not just functional, but a joy to use
						– think smooth animations and snappy performance. And here's the
						deal: I'm 100% committed to working closely with you. Your input is
						gold, and I'm always ready to tweak and adjust until we nail it.
						Let's make some digital magic together!
					</p>
				</article>
				<div className='bg-white'>
					<img
						src='https://picsum.photos/500/1000'
						alt=''
						className={`mt-24 w-full h-auto max-w-full object-contain`}
					/>
				</div>
				<Drawer title='stack & benefits' name='stack & benefits' />
				<article className='p-6'>
					<h2 className='text-xl font-bold uppercase'>
						understanding your needs
					</h2>
					<p className='font-editorial text-2xl mt-5 leading-10'>
						I take the time to listen to what you want to achieve with your
						software project. We work together to identify your goals,
						challenges, and preferences. As we build your solution, I
						continuously test and refine it to ensure it meets your
						expectations. Whether it's improving your business operations or
						creating a better user experience, I'm committed to delivering a
						high-quality solution that works the way you need it to.
					</p>
					<h2 className='text-xl font-bold uppercase mt-5'>my tech stack</h2>
					<p className='font-editorial text-2xl mt-5 leading-10'>
						For smaller projects, I prefer working with vanilla JavaScript,
						which allows me to craft a tailored architecture that precisely
						matches each project's requirements. I complement this with powerful
						animation libraries like GSAP for fluid motion effects and Three.js
						for immersive 3D web experiences. When tackling larger projects, I
						utilize frameworks like Astro or Next.js to ensure optimal
						scalability and performance.
					</p>
				</article>
			</section>
		</>
	);
};

export default How;

import React from "react";
import SectionHeader from "./section-header";
import { useInView } from "@/hooks/useInView";
import Carousel from "../carousel/carousel";

const What = () => {
	const [sectionRef, isInView] = useInView({
		threshold: 0.2, // Trigger when 20% of element is visible
	});
	const title = "what";
	return (
		<>
			<section
				className='text-yellow-300 pt-5'
				ref={sectionRef as React.RefObject<HTMLElement>}
			>
				<div className='p-6'>
					<SectionHeader digits='003' textNum='three' />
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
						From Curiosity to Creation: Crafting Order from Chaos Through
						Chemistry and Code
					</h2>
					<p className='font-editorial text-2xl mt-5 leading-10'>
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

				<article className='p-6'>
					<h2 className='text-xl font-bold uppercase'>Works on Display</h2>
					<p className='font-editorial text-2xl mt-5 leading-10'>
						Explore a collection of my software development projects that embody
						my journey towards creating order from chaos. Each piece
						demonstrates my commitment to solving complex problems through code.
						From innovative applications to dynamic web experiences, these works
						highlight my passion for crafting efficient and elegant solutions in
						the realm of software development.
					</p>
				</article>
				<Carousel className='' />
			</section>
		</>
	);
};

export default What;

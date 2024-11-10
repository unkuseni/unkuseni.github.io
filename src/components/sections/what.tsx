import React from "react";
import SectionHeader from "./section-header";
import { useInView } from "@/hooks/useInView";

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
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
						velit.
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
					<div className='bg-white'>
						<img
							src='https://picsum.photos/500/350'
							alt=''
							className={`mt-10 w-full h-auto max-w-full object-contain`}
						/>
					</div>
				</article>
				<div className='bg-white'>
					<img
						src='https://picsum.photos/500/1000'
						alt=''
						className={`mt-24 w-full h-auto max-w-full object-contain`}
					/>
				</div>
				<article className='p-6'>
					<h2 className='text-xl font-bold uppercase'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
						velit.
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
					<div className='bg-white'>
						<img
							src='https://picsum.photos/500/350'
							alt=''
							className={`mt-10 w-full h-auto max-w-full object-contain`}
						/>
					</div>
				</article>
				<article className="p-6">
					<h2 className="text-xl font-bold uppercase">Works on Display</h2>
					<p className="font-editorial text-2xl mt-5 leading-10">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur culpa fugit quia neque reiciendis est nihil cupiditate tempora libero natus, nam modi corrupti perspiciatis, provident alias, nemo ea adipisci? Culpa quo blanditiis illo dolores dolore animi assumenda, quidem amet molestiae!
						</p>
				</article>
			</section>
		</>
	);
};

export default What;

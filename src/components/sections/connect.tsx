import React from "react";
import SectionHeader from "./section-header";
import { useInView } from "@/hooks/useInView";
import { Button } from "../ui/button";

const Connect = () => {
	const [sectionRef, isInView] = useInView({
		threshold: 0.2, // Trigger when 20% of element is visible
	});

	const title = "connect";
	return (
		<>
			<section
				className='pt-5'
				ref={sectionRef as React.RefObject<HTMLElement>}
				id='connect'
			>
				<div className='p-6'>
					<SectionHeader digits='005' textNum='five' />
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
				<div className='p-6'>
					<p className='text-3xl leading-10 font-editorial italic '>
						<span className='font-editorial italic capitalize'>hey! </span>I'm{" "}
						<span className='capitalize'>olaseni,</span> a 24-year-old software
						developer. <span className='capitalize'>currently</span> based in{" "}
						<span className='capitalize'>Lagos, Nigeria</span>
					</p>
					<div className='mx-auto text-center my-10'>
						<h2 className='uppercase text-5xl leading-[1.5] font-bold font-editorial mb-10'>
							want to discuss a project?
						</h2>
						<a
							className='font-playfair text-3xl leading-relaxed italic border-orange-300 border py-3 px-8 hover:bg-orange-300 hover:text-white rounded-full text-center'
							href='mailto:amudalatadeoye@gmail.com'
						>
							Send me an email
						</a>
					</div>
					<div>
						<div className='uppercase leading-[1.5] font-bold font-editorial mb-10 text-center p-6 my-10'>
							<h2>thank you for your visit!</h2>
							<p>
								you can check out my socials to find out about my new
								adventures!
							</p>
						</div>
						<div className='flex justify-evenly items-center'>
							<a
								href='https://instagram.com/unkuseni'
								target='_blank'
								rel='noopener noreferrer'
								className='font-editorial italic text-4xl hover:text-orange-600 transition-colors duration-500'
							>
								Instagram
							</a>
							<a
								href='https://twitter.com/unkuseni'
								target='_blank'
								rel='noopener noreferrer'
								className='font-editorial italic text-4xl hover:text-gray-800 transition-colors duration-500'
							>
								Twitter
							</a>
							<a
								href='https://github.com/unkuseni'
								target='_blank'
								rel='noopener noreferrer'
								className='font-editorial italic text-4xl hover:text-green-400 transition-colors duration-500'
							>
								Github
							</a>
							<a
								href='https://www.linkedin.com/in/unkuseni/'
								target='_blank'
								rel='noopener noreferrer'
								className='font-editorial italic text-4xl hover:text-blue-400 transition-colors duration-500'
							>
								Linkedin
							</a>
						</div>
					</div>
				</div>
				<div className='bg-white flex justify-between text-center tracking-widest text-xl text-black uppercase font-caslon font-bold p-3'>
					<p>lagos, nigeria</p>
					<p>
						{new Date().toLocaleString("en", {
							day: "numeric",
							month: "long",
							year: "numeric",
						})}{" "}
					</p>
				</div>
			</section>
		</>
	);
};

export default Connect;

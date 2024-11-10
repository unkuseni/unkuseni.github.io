import React from "react";
import SectionHeader from "./section-header";
import { useInView } from "@/hooks/useInView";

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
				{/* <p className='text-3xl leading-10 font-editorial italic '>
					<span className='font-editorial italic capitalize'>hey! </span>I'm{" "}
					<span className='capitalize'>olaseni,</span> a 24-year-old software
					developer. <span className='capitalize'>currently</span> based in{" "}
					<span className='capitalize font-caslon'>Lagos, Nigeria</span>
				</p> */}
			</section>
		</>
	);
};

export default Connect;

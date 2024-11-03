import React from "react";
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
				className='p-6 bg-amber-100 text-green-700'
			>
				<SectionHeader digits='001' textNum='one' />
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
			</section>
		</>
	);
};

export default Why;

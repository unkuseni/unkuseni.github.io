import SectionHeader from "./section-header";
import { useInView } from "@/hooks/useInView";
import Carousel from "../carousel/carousel";

interface WhatProps {
	worksOnDisplay?: {
		title: string;
		description: string;
		image: string;
		liveLink: string;
		repoLink: string;
	}[];
}
const What: React.FC<WhatProps> = ({
	worksOnDisplay = [
		{
			title: "pet project",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam mollitia deserunt eligendi perspiciatis, aliquid aliquam! Ullam ipsam impedit reiciendis sapiente.",
			image: "https://picsum.photos/300/200",
			liveLink: "https://unkuseni.me",
			repoLink: "https://github.com/unkuseni",
		},
		{
			title: "pet project",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam mollitia deserunt eligendi perspiciatis, aliquid aliquam! Ullam ipsam impedit reiciendis sapiente.",
			image: "https://picsum.photos/300/200",
			liveLink: "https://unkuseni.me",
			repoLink: "https://github.com/unkuseni",
		},
		{
			title: "pet project",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam mollitia deserunt eligendi perspiciatis, aliquid aliquam! Ullam ipsam impedit reiciendis sapiente.",
			image: "https://picsum.photos/300/200",
			liveLink: "https://unkuseni.me",
			repoLink: "https://github.com/unkuseni",
		},
		{
			title: "pet project",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam mollitia deserunt eligendi perspiciatis, aliquid aliquam! Ullam ipsam impedit reiciendis sapiente.",
			image: "https://picsum.photos/300/200",
			liveLink: "https://unkuseni.me",
			repoLink: "https://github.com/unkuseni",
		},
	],
}) => {
	const [sectionRef, isInView] = useInView({
		threshold: 0.2, // Trigger when 20% of element is visible
	});
	const title = "what";
	return (
		<>
			<section
				className='relative max-sm:pt-5 sm:flex flex-shrink-0 max-sm:bg-[url("/bkg.png")] bg-center bg-no-repeat bg-cover sm:h-[calc(100vh-73px)]'
				ref={sectionRef as React.RefObject<HTMLElement>}
			>
				<div className="p-6 md:min-w-[576px] md:flex md:flex-col md:justify-center md:items-center">
					<SectionHeader digits="003" textNum="three" />
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
				<div className="md:self-center">
					<article className="p-6 md:w-[576px] md:flex md:flex-col md:items-center md:justify-center md:flex-shrink-0 md:relative md:gap-5">
						<h2 className="text-xl font-bold uppercase">
							From Curiosity to Creation: Crafting Order from Chaos Through
							Chemistry and Code
						</h2>
						<p className="font-editorial text-2xl mt-5 leading-10">
							"All my life, curiosity and taking things apart has helped me
							foster my creativity.
							<br />
							Software development is part of my ongoing journey of
							self-discovery that helps me understand the famous phrase, ordo ab
							chao.
							<br />
							My passion for unraveling the mysteries of the universe drives me
							forward. By combining my love for chemistry and coding, I aim to
							create solutions that bring order to chaos."
						</p>
					</article>

					<article className="p-6 md:w-[576px] md:flex md:flex-col md:items-center md:justify-center md:flex-shrink-0 md:relative md:gap-5">
						<h2 className="text-xl font-bold uppercase">Works on Display</h2>
						<p className="font-editorial text-2xl mt-5 leading-10">
							Explore a collection of my software development projects that
							embody my journey towards creating order from chaos. Each piece
							demonstrates my commitment to solving complex problems through
							code. From innovative applications to dynamic web experiences,
							these works highlight my passion for crafting efficient and
							elegant solutions in the realm of software development.
						</p>
					</article>
				</div>
				<Carousel className="sm:max-h-[calc(100vh-73px)] h-100" list={worksOnDisplay} />
			</section>
		</>
	);
};

export default What;

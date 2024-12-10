import { ArrowUpRight, Github } from "lucide-react";

const Carousel = ({
	className = "",
	list = [
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
	return (
		<div className={`relative p-6 ${className}`}>
			<div className=''>
				<ul className='flex my-6 gap-4 overflow-scroll scroll-smooth'>
					{list.map(
						({ title, description, image, liveLink, repoLink }, index) => (
							<li className='min-w-[320px]' key={index}>
								<img
									src={image}
									alt={title}
									className='h-auto mx-auto max-w-3/4'
								/>
								<div className='mt-10 w-3/4 mx-auto'>
									<h2 className='font-bold text-3xl font-editorial italic capitalize mb-6'>
										{title}
									</h2>
									<p className='mb-6 text-xl font-inter capitalize'>
										{description}
									</p>
									<div className='flex items-center justify-between'>
										<a
											href={liveLink}
											target='_blank'
											rel='noopener noreferrer'
										>
											<div className='flex items-center gap'>
												<p className='text-2xl uppercase font-inter'>live</p>
												<ArrowUpRight className='inline-flex items-center' />
											</div>
										</a>
										<a
											href={repoLink}
											target='_blank'
											rel='noopener noreferrer'
										>
											<Github />
										</a>
									</div>
								</div>
							</li>
						)
					)}
				</ul>
			</div>
		</div>
	);
};

export default Carousel;

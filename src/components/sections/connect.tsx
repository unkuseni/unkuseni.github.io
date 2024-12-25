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
				className='relative max-sm:pt-5 sm:flex sm:flex-col flex-shrink-0 max-sm:bg-[url("/bkg.png")] bg-center bg-no-repeat bg-cover sm:h-[calc(100vh-73px)]'
				ref={sectionRef as React.RefObject<HTMLElement>}
				id="connect"
			>
				<div className="sm:flex flex-shrink-0 sm:h-[calc(100vh-95px)]">
					<div className="p-6 md:min-w-[576px] md:flex md:flex-col md:justify-center md:items-center">
						<SectionHeader digits="005" textNum="five" />

						<p className="mx-auto text-center text-[clamp(6rem,29vw,25rem)] leading-[2] font-caslon font-bold uppercase sm:flex">
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
					<div className="p-6 md:w-[576px] md:flex md:flex-col md:items-center md:justify-center md:flex-shrink-0 md:h-[600px] md:relative md:self-center md:gap-5">
						<p className="text-3xl leading-10 font-editorial italic ">
							<span className="font-editorial italic capitalize">hey! </span>I'm{" "}
							<span className="capitalize">olaseni,</span> a 24-year-old
							software developer. <span className="capitalize">currently</span>{" "}
							based in <span className="capitalize">Lagos, Nigeria</span>
						</p>
						<div className="mx-auto text-center my-10">
							<h2 className="uppercase text-5xl leading-[1.5] font-bold font-editorial mb-10">
								want to discuss a project?
							</h2>
							<div className="flex flex-col justify-center gap-5 items-center mx-auto">
								<a
									className="font-playfair text-3xl leading-relaxed italic border-orange-300 border py-3 px-8 hover:bg-[rgba(0,0,0,0.6)] hover:text-white rounded-full text-center"
									href="mailto:amudalatadeoye@gmail.com"
								>
									Send me an email
								</a>
								<a
									className="font-playfair text-3xl leading-relaxed italic border-orange-300 border py-3 px-8 hover:bg-[rgba(0,0,0,0.6)] hover:text-white rounded-full text-center"
									href="tel:+2348158442664"
								>
									Call me
								</a>
							</div>
						</div>
						<div>
							<div className="uppercase leading-[1.5] font-bold font-editorial mb-10 text-center p-6 my-10">
								<h2>thank you for your visit!</h2>
								<p>
									you can check out my socials to find out about my new
									adventures!
								</p>
							</div>
							<div className="flex justify-evenly items-center">
								<a
									href="https://instagram.com/unkuseni"
									target="_blank"
									rel="noopener noreferrer"
									className="font-editorial italic text-4xl hover:text-orange-600 transition-colors duration-500"
								>
									Instagram
								</a>
								<a
									href="https://twitter.com/unkuseni"
									target="_blank"
									rel="noopener noreferrer"
									className="font-editorial italic text-4xl hover:text-gray-800 transition-colors duration-500"
								>
									Twitter
								</a>
								<a
									href="https://github.com/unkuseni"
									target="_blank"
									rel="noopener noreferrer"
									className="font-editorial italic text-4xl hover:text-green-400 transition-colors duration-500"
								>
									Github
								</a>
								<a
									href="https://www.linkedin.com/in/unkuseni/"
									target="_blank"
									rel="noopener noreferrer"
									className="font-editorial italic text-4xl hover:text-blue-400 transition-colors duration-500"
								>
									Linkedin
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-white flex justify-between text-center tracking-widest text-xl text-black uppercase font-caslon font-bold p-3">
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

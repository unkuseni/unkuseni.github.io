
const Hero = () => {
	return (
		<>
			<div className="w-screen overflow-hidden flex-shrink-0  min-h-[calc(100vh-73px)]">
				<div className="relative flex flex-col justify-between flex-nowrap md:min-w-[100vw] min-h-[calc(100vh-73px)] transition-opacity duration-500 p-12 py-24 overflow-hidden">
					<h2 className="text-[clamp(4rem,6vw,7rem)] uppercase font-bold animate-slide-down duration-700 md:text-center">
						<span className='after:content-[","] block my-5'>
							build, launch
						</span>
						<span className='after:content-["."] block'>grow</span>
					</h2>
					<div className="uppercase max-w-[200px] mx-auto text-center">
						<p className="tracking-widest">
							adeoye olaseni presents his portfolio. a full-stack developer and
							avid tinkerer with a drive to craft innovative solutions
						</p>
					</div>
					<img
						src="/port.jpeg"
						alt=""
						className="w-3/5 h-auto absolute left-72 sm:left-2/3 bottom-0 max-w-4xl"
					/>
					<h2 className="mb-20 text-[clamp(4rem,6vw,5rem)] uppercase font-bold animate-slide-up duration-700 mix-blend-difference">
						Your vision, my expertise.
					</h2>
					<div className="absolute bottom-0 left-0 p-3 uppercase max-sm:hidden">
						<p className="flex items-center gap-2">
							scroll to see what lies ahead
							<div className="inline-block border rounded-full text-center w-8 h-8 transform -rotate-90">
								<p className="animate-bounce p-2">↓</p>
							</div>
						</p>
					</div>
					<div className="absolute bottom-0 right-0 p-3 uppercase sm:hidden">
						<p className="flex items-center gap-2">
							scroll to see what lies below
							<div className="inline-block border rounded-full text-center w-8 h-8">
								<p className="animate-bounce p-2">↓</p>
							</div>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;

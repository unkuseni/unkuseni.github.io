

const Hero = () => {
	return (
		<>
			<div
				className={`relative flex flex-col justify-between flex-nowrap min-h-[100vh] transition-opacity duration-500 bg-black p-12 py-24 overflow-hidden `}
			>
				<h2 className='text-6xl uppercase font-bold animate-slide-down duration-700 '>
					<span className='after:content-["."] block my-5'>build, launch</span>
					<span className='after:content-["."] block'>grow</span>
				</h2>
				<div className='intro uppercase max-w-[50%] mx-auto text-center'>
					<p className='tracking-widest'>
						adeoye olaseni presents his portfolio. a full-stack developer and
						avid tinkerer with a drive to craft innovative solutions
					</p>
				</div>
				<img
					src='/port.jpeg'
					alt=''
					className='w-4/5 h-auto absolute left-44 bottom-12'
				/>
				<h2 className='mb-20 text-6xl uppercase font-bold animate-slide-up duration-700 mix-blend-difference'>
					Your vision, my expertise.
				</h2>
				<div className='absolute bottom-0 right-0 p-3 uppercase'>
					<p className="flex items-center gap-2">
						scroll to see what lies below
						<div className='inline-block border rounded-full text-center w-8 h-8'>
							<p className='animate-bounce p-2'>↓</p>
						</div>
					</p>
				</div>
			</div>
		</>
	);
};

export default Hero;

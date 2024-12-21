interface DrawerProps {
	className?: string;
	name?: string;
	title?: string;
}

const Drawer: React.FC<DrawerProps> = ({
	className = "",
	name = "adeoye olaseni",
	title = "2023 portfolio",
}) => {
	return (
		<div
			className={`${className} relative py-5 border-y border-y-white overflow-hidden flex-0`}
		>
			<div className="flex whitespace-nowrap will-change-transform">
				<div className="animate-marquee flex will-change-transform">
					<div className="flex">
						<p className="uppercase text-5xl mx-4 text-blue-400 font-playfair italic">
							{name}
						</p>
						<p className="uppercase text-5xl mx-4">{title}</p>
						<p className="uppercase text-5xl mx-4 text-blue-400 font-playfair italic">
							{name}
						</p>
						<p className="uppercase text-5xl mx-4">{title}</p>
					</div>
					<div className="flex">
						<p className="uppercase text-5xl mx-4 text-blue-400 font-playfair italic">
							{name}
						</p>
						<p className="uppercase text-5xl mx-4">{title}</p>
						<p className="uppercase text-5xl mx-4 text-blue-400 font-playfair italic">
							{name}
						</p>
						<p className="uppercase text-5xl mx-4">{title}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const VerticalDrawer: React.FC<DrawerProps> = ({
	className = "",
	name = "adeoye olaseni",
	title = "2023 portfolio",
}) => {
	return (
		<>
			<div
				className={`${className} min-w-16 h-[calc(100vh-73px)] border-x border-x-white relative z-20 flex flex-shrink-0 justify-center overflow-hidden  font-bold uppercase`}
			>
				<div className="transform translate-y-[19.8%] rotate-[180deg] skew-y-[360deg] will-change-transform writing-mode-vertical-rl text-orientation-mixed text-center text-3xl flex">
					<p className="whitespace-nowrap animate-up-marquee">
						<span className="my-2">{name}</span>
						<span className="my-2 text-green-500">{title}</span>
						<span className="my-2">{name}</span>
						<span className="my-2 text-green-500">{title}</span>
						<span className="my-2">{name}</span>
						<span className="my-2 text-green-500">{title}</span>
						<span className="my-2">{name}</span>
						<span className="my-2 text-green-500">{title}</span>
					</p>
					<p className="whitespace-nowrap animate-up-marquee">
						<span className="my-2">{name}</span>
						<span className="my-2 text-green-500">{title}</span>
						<span className="my-2">{name}</span>
						<span className="my-2 text-green-500">{title}</span>
						<span className="my-2">{name}</span>
						<span className="my-2 text-green-500">{title}</span>
						<span className="my-2">{name}</span>
						<span className="my-2 text-green-500">{title}</span>
					</p>
				</div>
				<div className="transform -translate-y--19.8p will-change-transform writing-mode-vertical-rl text-orientation-mixed text-center text-3xl flex">
					<p className="whitespace-nowrap animate-up-marquee">
						<span className="my-2">{name}</span>
						<span className="my-2 text-green-500">{title}</span>
						<span className="my-2">{name}</span>
						<span className="my-2 text-green-500">{title}</span>
						<span className="my-2">{name}</span>
						<span className="my-2 text-green-500">{title}</span>
						<span className="my-2">{name}</span>
						<span className="my-2 text-green-500">{title}</span>
					</p>
					<p className="whitespace-nowrap animate-up-marquee">
						<span className="my-2">{name}</span>
						<span className="my-2 text-green-500">{title}</span>
						<span className="my-2">{name}</span>
						<span className="my-2 text-green-500">{title}</span>
						<span className="my-2">{name}</span>
						<span className="my-2 text-green-500">{title}</span>
						<span className="my-2">{name}</span>
						<span className="my-2 text-green-500">{title}</span>
					</p>
				</div>
			</div>
		</>
	);
};
export { Drawer, VerticalDrawer };

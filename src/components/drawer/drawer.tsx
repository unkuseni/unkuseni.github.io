

interface DrawerProps {
  className?: string;
  name?: string;
  title?: string;
}

const Drawer: React.FC<DrawerProps> = ({ className = "", name = "adeoye olaseni", title = "2023 portfolio" }) => {
	return (
		<div
			className={`${className} relative py-5 border-y border-y-white overflow-hidden bg-black`}
		>
			<div className='flex whitespace-nowrap will-change-transform'>
				<div className='animate-marquee flex will-change-transform'>
					<div className='flex'>
						<p className='uppercase text-5xl mx-4 text-blue-400'>{name}</p>
						<p className='uppercase text-5xl mx-4'>{title}</p>
						<p className='uppercase text-5xl mx-4 text-blue-400'>{name}</p>
						<p className='uppercase text-5xl mx-4'>{title}</p>
					</div>
					<div className='flex'>
						<p className='uppercase text-5xl mx-4 text-blue-400'>{name}</p>
						<p className='uppercase text-5xl mx-4'>{title}</p>
						<p className='uppercase text-5xl mx-4 text-blue-400'>{name}</p>
						<p className='uppercase text-5xl mx-4'>{title}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Drawer;

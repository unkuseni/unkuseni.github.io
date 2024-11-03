

const SectionHeader = ({ digits = "000", textNum = "zero" }) => {
	return (
		<div className='w-full uppercase flex justify-between'>
			<span>chapter</span>
			<span>{digits}</span>
			<span>{textNum}</span>
		</div>
	);
};

export default SectionHeader;

const Drawer = ({ num = 1, text = "text" }: { num: number; text: string }) => {
	return (
		<>
			<div
				class={`sm:h-[100vh] h-15 w-full sm:w-20 flex sm:flex-col justify-between py-5 sm:py-10 px-5 sm:px-3 bg-blue-400 items-center  text-xs uppercase font-Mont border-t sm:border-l sm:border-y-0 border-yellow-800`}
			>
				<p>0{num}</p>
				<p class=''>{text}</p>
			</div>
		</>
	);
};

export default Drawer;

import { createEffect, createSignal } from "solid-js";
const Loader = ({
	lastName = "doe",
	firstName = "john",
	work = "weeb",
	hobby = "wtf",
}: {
	lastName: string;
	firstName: string;
	work: string;
	hobby: string;
}) => {
	const [count, setCount] = createSignal(0);
	createEffect(() => {
		if (count() < 100) {
			setTimeout(() => setCount(count() + 1), 20);
		}
	});
	const countStr = () =>
		count().toLocaleString("en-US", {
			minimumIntegerDigits: 3,
    });
  
	return (
		<>
			<div class='bg-blue-500 min-h-[100vh] flex flex-col justify-center'>
				<ul class='flex w-full justify-evenly'>
					<li class='uppercase font-extrabold text-xs'>{countStr()}</li>
					<li class='uppercase font-extrabold text-xs'>{lastName}</li>
					<li class='uppercase font-extrabold text-xs'>{firstName}</li>
					<li class='uppercase font-extrabold text-xs'>{work}</li>
					<li class='uppercase font-extrabold text-xs'>{hobby}</li>
				</ul>
				<div
					class={`w-2 bg-white h-1 mx-auto my-7 transition-all duration-500 ease-in-out justify-`}
				> </div>
			</div>
		</>
	);
};

export default Loader;

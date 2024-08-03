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
	const [invis, setInvis] = createSignal(false);
	createEffect(() => {
		if (count() < 100) {
			setTimeout(() => setCount(count() + 1), 23);
		}
	});
	const countStr = () =>
		count().toLocaleString("en-US", {
			minimumIntegerDigits: 3,
		});

	return (
		<div
			class={`font-Mont min-w-[100vw] bg-blue-500 min-h-[100vh] flex flex-col basis-full justify-center items-center duration-1000 transition-all overflow-hidden ${
				invis() ? "-translate-x-full" : "translate-x-0" 
			}`}
			onClick={() => setInvis(!invis())}>
			<ul class='flex w-full justify-evenly max-w-[768px]'>
				<li
					class=' uppercase text-xs transition-opacity delay-200 duration-700 animate-mvup'
					classList={{ "opacity-0": count() == 100 }}
				>
					{countStr()}
				</li>
				<li
					class='italic uppercase font-extrabold text-xs transition-opacity delay-200 duration-700 animate-mvdown'
					classList={{ "opacity-0": count() == 100 }}
				>
					{lastName}
				</li>
				<li
					class='italic uppercase font-extrabold text-xs transition-opacity delay-200 duration-700 animate-mvup'
					classList={{ "opacity-0": count() == 100 }}
				>
					{firstName}
				</li>
				<li
					class='italic uppercase font-extrabold text-xs transition-opacity delay-200 duration-700 animate-mvdown'
					classList={{ "opacity-0": count() == 100 }}
				>
					{work}
				</li>
				<li
					class='italic uppercase font-extrabold text-xs transition-opacity delay-200 duration-700 animate-mvup'
					classList={{ "opacity-0": count() == 100 }}
				>
					{hobby}
				</li>
			</ul>
			<div
				class={`uppercase font-extrabold delay-700 transition-all duration-[1200ms] ease-in-out opacity-0 text-xs italic min-w-[155px]`}
				classList={{ "opacity-100": count() == 100 }}
			>
				<p>please click anywhere</p>
			</div>
		</div>
	);
};

export default Loader;

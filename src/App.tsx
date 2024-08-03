import { createSignal, createEffect } from "solid-js";
import Hero from "./components/hero/hero";
import Loader from "./components/loader/loader";
import DefaultNav from "./components/nav/nav";
import Drawer from "./components/drawers/drawer";
function App() {
	return (
		<>
			<div class={`flex flex-col sm:flex-row`}>
				<Hero />
        <Drawer num={1} text='wtf'/>
        <Drawer num={2} text='yea' />
        <Drawer num={3} text='dnd' />
        <Drawer num={4} text='lol' />

			</div>
		</>
	);
}

export default App;

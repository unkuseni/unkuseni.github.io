import { BlurButton } from "../buttons/button";
const DefaultNav = ({
	menuText = "menu",
	contactText = "contact",
}: {
	menuText: string;
	contactText: string;
}) => {
	return (
		<nav
			class={`flex justify-between p-5 sm:p-7 md:p-9 lg:p-11 bg-transparent h-min min-w-full`}
		>
			<BlurButton text={menuText} />
			<BlurButton text={contactText} />
		</nav>
	);
};

export default DefaultNav;

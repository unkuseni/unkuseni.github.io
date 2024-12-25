/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				caslon: ["Caslon", "sans-serif"],
				playfair: ["Playfair Display", "serif"],
				editorial: ["Editorial", "serif"],
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {},
			animation: {
				fadeIn: "fade-in 0.6s ease-in-out",
				fadeOut: "fade-out 0.6s ease-in-out",
				"slide-down": "slide-down 0.6s ease-in-out",
				"slide-up": "slide-up 0.6s ease-in-out",
				marquee: "marquee 15s linear infinite",
				"up-marquee": "up-marquee 30s linear infinite",
				"scale-up": "scale-up 1.2s forwards",
			},
			translate: {
				"-19.8p": "-19.8003%",
			},
			keyframes: {
				"fade-in": {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},

				"fade-out": {
					from: { opacity: 1 },
					to: { opacity: 0 },
				},

				"slide-down": {
					from: { transform: "translateY(-240px)" },
					to: { transform: "translateY(0)" },
				},

				"slide-up": {
					from: { transform: "translateY(240px)" },
					to: { transform: "translateY(0)" },
				},
				marquee: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-50%)" },
				},
				"up-marquee": {
					"0%": { transform: "translateY(0)" },
					"100%": { transform: "translateY(-100%)" },
				},
				"scale-up": {
					"0%": {
						transform: "scaleY(0)",
						opacity: 0,
					},
					"100%": {
						transform: "scaleY(1)",
						opacity: 1,
					},
				},
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		({ addUtilities }) =>
			addUtilities(
				{
					".writing-mode-vertical-rl": {
						"writing-mode": "vertical-rl",
					},
					".text-orientation-mixed": {
						"text-orientation": "mixed",
					},
					".translate-y--19.8p": {
						transform: "translateY(-19.8003%) translate3d(0px, 0px, 0px)",
					},
				},
				["responsive"],
			),
	],
};

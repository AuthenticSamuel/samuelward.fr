import cn from "classnames";
import { useContext } from "react";

import NavButton from "components/elements/NavButton";
import NavThemeToggle from "components/elements/NavThemeToggle";

import { ThemeContext } from "contexts/Theme";
import { useRouter } from "next/router";

const Navbar = () => {
	const { isDarkTheme } = useContext(ThemeContext);
	const router = useRouter();

	return (
		<nav
			className={cn(
				"p-4 flex gap-4 border-b-4 border-dashed outline-dashed outline-4 transition-all",
				{
					"bg-yellow-200 border-yellow-100 outline-yellow-200": !isDarkTheme,
					"bg-sky-900 border-slate-800 outline-sky-900": isDarkTheme,
				}
			)}
		>
			<NavButton href="/">Samuel Ward</NavButton>
			<NavButton href="/experience">Expériences</NavButton>
			<NavButton href="/journey">Parcours</NavButton>
			<NavButton href="/projects">Projets</NavButton>
			<NavButton href="/contact">Contact</NavButton>
			<NavThemeToggle />
		</nav>
	);
};

export default Navbar;

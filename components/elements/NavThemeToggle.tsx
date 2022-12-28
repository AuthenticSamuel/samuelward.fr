import cn from "classnames";
import { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

import { ThemeContext } from "contexts/Theme";

const NavThemeToggle = () => {
	const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

	return (
		<button
			className={`font-bold uppercase text-slate-900 bg-slate-900 border-none rounded-xl shadow-slate-900 group`}
			onClick={() => toggleTheme()}
		>
			<span
				className={cn(
					"h-full flex justify-center items-center box-border border-2 border-slate-900 rounded-xl px-5 py-3 transition-all -translate-y-1 group-hover:-translate-y-2 group-active:translate-y-0",
					{
						"bg-yellow-300": !isDarkTheme,
						"group-hover:bg-yellow-400": !isDarkTheme,
						"bg-sky-800": isDarkTheme,
						"group-hover:bg-sky-700": isDarkTheme,
					}
				)}
			>
				{isDarkTheme ? (
					<FaMoon className="inline" />
				) : (
					<FaSun className="inline" />
				)}
			</span>
		</button>
	);
};

export default NavThemeToggle;

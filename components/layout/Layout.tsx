import cn from "classnames";
import React, { useContext } from "react";

import Footer from "components/footer/Footer";
import Navbar from "components/navbar/Navbar";

import { ThemeContext } from "contexts/Theme";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	const { isDarkTheme } = useContext(ThemeContext);

	return (
		<div
			className={cn(
				"min-h-screen max-h-screen transition-colors flex flex-col",
				{
					"bg-yellow-100": !isDarkTheme,
					"bg-slate-800": isDarkTheme,
				}
			)}
		>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;

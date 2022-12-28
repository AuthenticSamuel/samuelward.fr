import React, { createContext, useState } from "react";

type Props = {
	children: React.ReactNode;
};

const ThemeContext = createContext({
	isDarkTheme: false,
	toggleTheme: () => {},
});

const ThemeProvider = ({ children }: Props) => {
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	const toggleTheme = () => {
		setIsDarkTheme(isDarkTheme => !isDarkTheme);
	};

	return (
		<ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
export { ThemeContext };

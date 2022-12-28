import cn from "classnames";
import React from "react";

type Props = {
	children: React.ReactNode;
	outerClassName?: string;
	innerClassName?: string;
	href: string;
};

const AnchorButton = ({
	children,
	outerClassName = "",
	innerClassName = "",
	href,
}: Props) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className={`font-bold uppercase text-slate-900 bg-slate-900 border-none rounded-xl group/button ${outerClassName}`}
		>
			<span
				className={cn(
					"h-full flex gap-2 justify-center items-center box-border bg-blue-400 group-hover/button:bg-blue-500 border-2 border-slate-900 rounded-xl px-6 py-3 transition-all -translate-y-1 group-hover/button:-translate-y-2 group-active/button:translate-y-0",
					innerClassName
				)}
			>
				{children}
			</span>
		</a>
	);
};

export default AnchorButton;

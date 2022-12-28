import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
	children: React.ReactNode;
	outerClassName?: string;
	innerClassName?: string;
	href: string;
};

const NavButton = ({
	children,
	outerClassName = "",
	innerClassName = "",
	href,
}: Props) => {
	const router = useRouter();
	const active = router.pathname === href;

	return (
		<Link
			href={href}
			className={`font-bold uppercase text-slate-900 bg-slate-900 border-none rounded-xl w-0 flex-grow group ${outerClassName}`}
		>
			<span
				className={cn(
					"h-full flex justify-center items-center box-border border-2 border-slate-900 rounded-xl px-6 py-3 transition-all -translate-y-1 group-hover:-translate-y-2 group-active:translate-y-0",
					innerClassName,
					{
						"bg-purple-400 group-hover:bg-purple-500": !active,
						"bg-blue-400 group-hover:bg-blue-500": active,
					}
				)}
			>
				{children}
			</span>
		</Link>
	);
};

export default NavButton;

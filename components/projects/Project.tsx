import cn from "classnames";
import { useContext, useState } from "react";

import { ThemeContext } from "contexts/Theme";

import type { Project } from "types";
import AnchorButton from "components/elements/AnchorButton";

type Props = {
	project: Project;
	index: number;
};

const Project = ({ project, index }: Props) => {
	const { isDarkTheme } = useContext(ThemeContext);
	const [displayed, setDisplayed] = useState(false);

	setTimeout(() => {
		setDisplayed(true);
	}, 200 * (index + 1));

	return (
		<div
			className={cn(
				"w-0 flex-grow hover:flex-grow-[2] transition-all duration-500 text-slate-900 bg-slate-900 border-none rounded-xl group",
				{
					"opacity-0 translate-y-5": !displayed,
					"opacity-100 translate-y-0": displayed,
				}
			)}
		>
			<div
				className={cn(
					"h-full p-8 box-border border-2 border-slate-900 rounded-xl -translate-y-1 transition-colors flex gap-8",
					{
						"bg-yellow-200 group-hover:bg-purple-300": !isDarkTheme,
						"bg-blue-300 group-hover:bg-purple-400": isDarkTheme,
					}
				)}
			>
				<div className="flex">
					<h3 className="uppercase font-bold text-3xl vertical-lr rotate-180">
						{project.title}
					</h3>
				</div>
				<div className="opacity-0 group-hover:opacity-100 flex flex-col justify-end gap-4 text-xl overflow-hidden text-ellipsis transition-opacity group-hover:delay-500">
					<h3 className="font-bold text-3xl italic">{project.title}</h3>
					<div className="flex flex-col gap-1">
						<h4 className="font-bold">Qu&apos;est ce que c&apos;est?</h4>
						<p className="text-justify">{project.description}</p>
					</div>
					<div className="flex flex-col gap-1">
						<h4 className="font-bold">Comment c&apos;est fait?</h4>
						<p className="text-justify">{project.details}</p>
					</div>
					<div className="flex flex-col gap-4">
						<h4 className="font-bold">J&apos;ai envie de voir!</h4>
						<div className="flex flex-wrap gap-4">
							{project.links.map((link, index) => (
								<AnchorButton
									key={`link-${index}-${link.url}`}
									href={link.url}
								>
									<link.icon className="text-2xl" />
									{link.name}
								</AnchorButton>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;

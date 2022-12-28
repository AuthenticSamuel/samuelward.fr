import { NextPage } from "next";
import { FaGithub, FaGlobe } from "react-icons/fa";

import Project from "components/projects/Project";
import type { Project as ProjectType } from "types";

const projects: Array<ProjectType> = [
	{
		title: "Infernal.dev",
		description:
			"Infernal.dev est un gros projet, consistant à regrouper tous les projets que j'effectue sous un seul et même nom. Il y aura un site infernal.dev, avec la gestion web d'INFBOT, divers services self-hostés...",
		details:
			"Tout dépend du projet: NGINX, Docker, TypeScript, JavaScript, Next.js, React, Python, Linux Serveur, matériel type VPS...",
		links: [
			{
				icon: FaGithub,
				url: "https://github.com/Team-Infernal",
				name: "Groupe GitHub",
			},
		],
	},
	{
		title: "Teaminfernal.fr",
		description:
			"Premier site web responsive pour mon groupe, Infernal. Il répertorie certains CVs des membres et des petites explications sur divers projets. Ce site sera remplacé dans le futur par infernal.dev.",
		details: "HTML, CSS, JavaScript, PHP",
		links: [
			{
				icon: FaGlobe,
				url: "https://teaminfernal.fr",
				name: "Site",
			},
		],
	},
	{
		title: "INFBOT Services",
		description:
			"Bot Discord qui modère automatiquement les tchats, donne aux utilisateurs des jeux, et peut créer des canaux vocaux automatiquement sur demande d'un utilisateur. Ce projet est toujours en cours de développement.",
		details: "JavaScript, TypeScript & Node.js",
		links: [
			{
				icon: FaGithub,
				url: "https://github.com/INF-Zenyth/INFBOT-Services",
				name: "Repo",
			},
		],
	},
	{
		title: "CESI - Lahya",
		description:
			"Site web répertoriant des offres de stage / d'alternance. Site incomplet, mais ayant des principes intéressants.",
		details: "JavaScript, React, PHP, OOP...",
		links: [
			{
				icon: FaGithub,
				url: "https://github.com/Team-Infernal/Lahya",
				name: "Site",
			},
			{
				icon: FaGithub,
				url: "https://github.com/Team-Infernal/LahyaServer",
				name: "Serveur",
			},
		],
	},
	{
		title: "CESI - Delivery Manager",
		description: "",
		details: "C++, .NET, Visual Studio & SQL Server",
		links: [
			{
				icon: FaGithub,
				url: "https://github.com/Team-Infernal",
				name: "Repo",
			},
		],
	},
];

const ProjectsPage: NextPage = () => {
	return (
		<main className="flex-grow flex overflow-hidden">
			<div className="p-16 flex-grow flex gap-8 transition-all">
				{projects.map((project, index) => (
					<Project
						key={project.title}
						project={project}
						index={index}
					/>
				))}
			</div>
		</main>
	);
};

export default ProjectsPage;

import { IconType } from "react-icons";

type Project = {
	title: string;
	description: string;
	details: string;
	links: Array<ProjectLink>;
};

type ProjectLink = {
	icon: IconType;
	url: string;
	name: string;
};

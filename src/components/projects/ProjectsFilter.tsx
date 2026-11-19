import React, { useMemo } from "react";
import { Project } from "../../types/api";

const defaultTypes = [
	'Fintech',
	"Telematics",
	'Social Media'
];

function ProjectsFilter({ setSelectProject, projects = [] }: { setSelectProject: React.SetStateAction<any>; projects?: Project[] }) {
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => setSelectProject(event.target.value);

	const selectOptions = useMemo(() => {
		const projectTypes = projects.map((p) => p.type.charAt(0).toUpperCase() + p.type.slice(1));
		const all = new Set([...defaultTypes, ...projectTypes]);
		return Array.from(all).sort();
	}, [projects]);

	return (
		<select
			onChange={handleChange}
			className="px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light">
			<option value={""} className="text-sm sm:text-md">
				All Projects
			</option>

			{selectOptions.map((option) => (
				<option className="text-normal sm:text-md" key={option}>
					{option}
				</option>
			))}
		</select>
	);
}

export default ProjectsFilter;

import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import ProjectsFilter from './ProjectsFilter';
import { getProjects } from '../../services/api';
import { Project } from '../../types/api';

function ProjectsGrid() {
	const [projects, setProjects] = useState<Project[]>([]);
	const [searchProject, setSearchProject] = useState('');
	const [selectProject, setSelectProject] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getProjects()
			.then((res) => setProjects((res.data as unknown as Project[]) || []))
			.catch(console.error)
			.finally(() => setLoading(false));
	}, []);

	const filteredProjects = projects.filter((item) => {
		const matchesSearch = searchProject
			? item.title.toLowerCase().includes(searchProject.toLowerCase())
			: true;
		const type = item.type.charAt(0).toUpperCase() + item.type.slice(1);
		const matchesCategory = selectProject ? type.includes(selectProject) : true;
		return matchesSearch && matchesCategory;
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
		setSearchProject(event.target.value);

	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Projects portfolio
				</p>
			</div>

			<div className="mt-10 sm:mt-16">
				<h3 className="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3">
					Search projects by title or filter by category
				</h3>
				<div className="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3">
					<div className="flex justify-between gap-2">
						<span className="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
							<FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
						</span>
						<input
							className="ont-general-medium pl-3 pr-1 sm:px-4 py-2 border border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
							onChange={handleChange}
							id="name"
							name="name"
							type="search"
							required={false}
							placeholder="Search Projects"
							aria-label="Name"
						/>
					</div>
					<ProjectsFilter setSelectProject={setSelectProject} />
				</div>
			</div>

			{loading ? (
				<div className="text-center mt-10">
					<p className="text-lg text-ternary-dark dark:text-ternary-light">Loading projects...</p>
				</div>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5">
					{filteredProjects.map((project) => (
						<ProjectSingle key={project._id} {...project} />
					))}
				</div>
			)}
		</section>
	);
}

export default ProjectsGrid;

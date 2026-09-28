import Image from 'next/image';
import { FiTag } from 'react-icons/fi';
import PagesMetaHead from '../../components/PagesMetaHead';
import { getProject } from '../../services/api';
import { Project } from '../../types/api';
import { GetServerSidePropsContext } from 'next';

function ProjectSingle(props: { project: Project }) {
	const { project } = props;

	if (!project) {
		return (
			<div className="container mx-auto mt-20 text-center">
				<p className="text-2xl text-ternary-dark dark:text-ternary-light">Project not found</p>
			</div>
		);
	}

	return (
		<div className="container mx-auto">
			<PagesMetaHead title={project.title} />

			{/* Header */}
			<div>
				<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
					{project.ProjectHeader.title}
				</p>
				<div className="flex">
					<div className="flex items-center">
						<FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
						<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
							{project.ProjectHeader.tags}
						</span>
					</div>
				</div>
			</div>

			{/* Gallery */}
			<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
				{project.ProjectImages.map((image, index) => {
					return (
						<div className="mb-10 sm:mb-0" key={index}>
							<Image
								src={image.img}
								className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
								alt={image.title}
								layout="responsive"
								width={100}
								height={90}
							/>
						</div>
					);
				})}
			</div>

			{/* Info */}
			<div className="block sm:flex gap-0 sm:gap-10 mt-14">
				<div className="w-full sm:w-1/3 text-left">
					{/* Single project client details */}
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
							{project.ProjectInfo.ClientHeading}
						</p>
						<ul className="leading-loose">
							{project.ProjectInfo.CompanyInfo.map((info, index) => {
								return (
									<li
										className="font-general-regular text-ternary-dark dark:text-ternary-light"
										key={index}
									>
										<span>{info.title}: </span>
										<a
											href={info.link}
											target={"_blank"}
											className={
												info.title === 'Website'
													? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
													: ''
											}
											aria-label="Project Website and Phone"
										>
											{info.details}
										</a>
									</li>
								);
							})}
						</ul>
					</div>

					{/* Single project objectives */}
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							{project.ProjectInfo.ObjectivesHeading}
						</p>
						<p className="font-general-regular text-primary-dark dark:text-ternary-light">
							{project.ProjectInfo.ObjectivesDetails}
						</p>
					</div>

					{/* Single project technologies */}
					{project.ProjectInfo.Technologies[0] && (
						<div className="mb-7">
							<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
								{project.ProjectInfo.Technologies[0].title}
							</p>
							<p className="font-general-regular text-primary-dark dark:text-ternary-light">
								<ul>
									{project.ProjectInfo.Technologies[0].techs.map((skill, i) => (
										<li key={i}>{skill}</li>
									))}
								</ul>
							</p>
						</div>
					)}
				</div>

				{/*  Single project right section details */}
				<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
					<p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
						{project.ProjectInfo.ProjectDetailsHeading}
					</p>
					{project.ProjectInfo.ProjectDetails.filter((d) => d.point).map((details, index) => {
						return (
							<p
								key={index}
								className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
							>
								<strong>{details.point + ' '}</strong>
								<ul style={{ listStyle: 'inside', paddingLeft: '20px' }}>
									{details.details.map((task, i) => (
										<li key={i}>{task}</li>
									))}
								</ul>
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const { id } = context.query;
	try {
		const res = await getProject(id as string);
		return {
			props: {
				project: res.data || null,
			},
		};
	} catch {
		return {
			props: {
				project: null,
			},
		};
	}
}

export default ProjectSingle;

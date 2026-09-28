import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import PagesMetaHead from '../components/PagesMetaHead';
import { getActiveResume } from '../services/api';
import { Resume } from '../types/api';

// Ensure Cloudinary URL serves inline (for iframe preview)
function toInlineUrl(url: string): string {
	if (url.includes('/fl_inline/')) return url;
	return url.replace('/upload/', '/upload/fl_inline/');
}

// Ensure Cloudinary URL serves as attachment (for download)
function toDownloadUrl(url: string): string {
	return url.replace('/fl_inline/', '/').replace('/upload/', '/upload/fl_attachment/');
}

function ResumePage() {
	const [resume, setResume] = useState<Resume | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getActiveResume()
			.then((res) => {
				const data = res.data as unknown as Resume;
				// Check if we got an actual resume (not empty object)
				if (data && data._id) {
					setResume(data);
				}
			})
			.catch(() => {})
			.finally(() => setLoading(false));
	}, []);

	return (
		<div>
			<PagesMetaHead title="Resume" />

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.1 }}
				className="container mx-auto py-5 lg:py-10 lg:mt-5"
			>
				<div className="text-center mb-8">
					<p className="font-general-medium text-2xl sm:text-4xl mb-2 text-primary-dark dark:text-primary-light">
						My Resume
					</p>
					{resume && (
						<p className="text-lg text-ternary-dark dark:text-ternary-light">
							{resume.description || resume.title}
						</p>
					)}
				</div>

				{loading ? (
					<div className="text-center">
						<p className="text-lg text-ternary-dark dark:text-ternary-light">Loading resume...</p>
					</div>
				) : !resume ? (
					<div className="text-center">
						<p className="text-lg text-ternary-dark dark:text-ternary-light">
							No resume available at the moment. Please check back later.
						</p>
					</div>
				) : (
					<div>
						{/* Download button */}
						<div className="flex justify-center mb-6">
							<a
								href={toDownloadUrl(resume.fileUrl)}
								className="flex items-center gap-2 font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-6 py-3 duration-300"
							>
								<FiDownload className="text-lg" />
								Download Resume
							</a>
						</div>

						{/* PDF Preview */}
						<div className="bg-white dark:bg-ternary-dark rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
							<iframe
								src={toInlineUrl(resume.fileUrl)}
								className="w-full"
								style={{ height: '80vh' }}
								title="Resume Preview"
							/>
						</div>
					</div>
				)}
			</motion.div>
		</div>
	);
}

export default ResumePage;

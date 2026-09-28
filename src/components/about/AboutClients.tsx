import { useEffect, useState } from 'react';
import { getClients } from '../../services/api';
import { Client } from '../../types/api';
import { clientsData, clientsHeading } from '../../data/clientsData';
import AboutClientSingle from './AboutClientSingle';

// Static clients with string image paths for merging
const staticClients = clientsData.map((c) => ({
	_id: c._id,
	title: c.title,
	img: c.imgPath,
	staticImg: c.img, // keep StaticImageData for local rendering
}));

function AboutClients() {
	const [apiClients, setApiClients] = useState<Client[]>([]);

	useEffect(() => {
		getClients()
			.then((res) => setApiClients((res.data as unknown as Client[]) || []))
			.catch(() => {});
	}, []);

	// Merge: API first, then static (skip static if title already exists from API)
	const apiTitles = new Set(apiClients.map((c) => c.title.toLowerCase()));
	const uniqueStatic = staticClients.filter((c) => !apiTitles.has(c.title.toLowerCase()));

	return (
		<div className="mt-10 sm:mt-20">
			<p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
				{clientsHeading}
			</p>
			<div className="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
				{apiClients.map((client) => (
					<AboutClientSingle
						title={client.title}
						image={client.img}
						key={client._id}
					/>
				))}
				{uniqueStatic.map((client) => (
					<AboutClientSingle
						title={client.title}
						image={client.staticImg}
						key={client._id}
					/>
				))}
			</div>
		</div>
	);
}

export default AboutClients;

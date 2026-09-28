import { useEffect, useState } from 'react';
import { getClients } from '../../services/api';
import { Client } from '../../types/api';
import AboutClientSingle from './AboutClientSingle';

function AboutClients() {
	const [clients, setClients] = useState<Client[]>([]);

	useEffect(() => {
		getClients()
			.then((res) => setClients((res.data as unknown as Client[]) || []))
			.catch(console.error);
	}, []);

	return (
		<div className="mt-10 sm:mt-20">
			<p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
				Some of the brands I worked with
			</p>
			<div className="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
				{clients.map((client) => (
					<AboutClientSingle
						title={client.title}
						image={client.img}
						key={client._id}
					/>
				))}
			</div>
		</div>
	);
}

export default AboutClients;

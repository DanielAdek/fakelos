import { v4 as uuidv4 } from 'uuid';

// Import images
import HeritageImage from '../../public/images/brands/heritage.jpeg';
import NownowImage from '../../public/images/brands/nownow.jpeg';
import StandbicImage from '../../public/images/brands/standbic.png';
import WayaImage from '../../public/images/brands/waya.jpeg';

export const clientsHeading = 'Some of the brands I worked with';

export const clientsData = [
	{
		id: uuidv4(),
		_id: 'static-client-1',
		title: 'Heritage',
		img: HeritageImage,
		imgPath: '/images/brands/heritage.jpeg',
	},
	{
		id: uuidv4(),
		_id: 'static-client-2',
		title: 'Waya Multilinks',
		img: WayaImage,
		imgPath: '/images/brands/waya.jpeg',
	},
	{
		id: uuidv4(),
		_id: 'static-client-3',
		title: 'Stanbic',
		img: StandbicImage,
		imgPath: '/images/brands/standbic.png',
	},
	{
		id: uuidv4(),
		_id: 'static-client-4',
		title: 'NowNow',
		img: NownowImage,
		imgPath: '/images/brands/nownow.jpeg',
	},
];

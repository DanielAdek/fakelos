import { v4 as uuidv4 } from 'uuid';
import moment from "moment";

export const aboutMeData = [
	{
		id: uuidv4(),
		bio: `Solution-driven professional excelling in a highly collaborative work environment, finding solutions to
					challenges and focused on customer satisfaction.
					`
	},
	{
		id: uuidv4(),
		bio: `Proven experience developing consumer-focused
					products using Technology tools like NestJS, NodeJS/Express, Java (Spring Boot), SPA (ReactJS), NoSql, SQL,
					Microservices, AI powered app using LangchainJS, and other technologies and architectures.
				`
	},
	{
		id: uuidv4(),
		bio: `Experience building products (like fintech, social application, pension application, vehicle tracking application, AI powered contextual app, and more) for cross-functional app, meeting
					highest standards for design, user experience, best practices, usability and speed.
				`
	},
	{
		id: uuidv4(),
		bio: `My collaboration, people-centric nature, and compassion have afforded me excellent software development skills 
		Within the last ${(moment("2018-08-06", "YYYYMMDD").fromNow()).split(' ')[0]} years, I have also streangthen my development skill in Javascript, Typescript and with growth mindedness 
		I have indulge in self development for better productivity and more development skills which include Java (Spring Boot), Generative AI and 
		more.`
	},
	{
		id: uuidv4(),
		bio: `My other achievements includes applications like loan and savings application, booking system, fintech application with customary banks like 
		Stanbic IBTC pension app, Guarantee Trust Bank fastlane application and more.`
	},
	{
		id: uuidv4(),
		bio: `I respond to challenges by designing and developing solutions and building web applications aligned to customer's
					needs and services.
				`
	},
	{
		id: uuidv4(),
		bio: `I translate solutions into code and working across many different APIs, third-party integrations
					and databases.`
	},
];

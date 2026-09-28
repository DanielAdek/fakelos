export interface IApiResponse<T> {
  message?: string;
  error?: boolean;
  status?: number;
  data?: T;
  meta?: object;
}

export interface ProjectImage {
  title: string;
  img: string;
}

export interface CompanyInfoItem {
  title: string;
  details: string;
  link: string;
}

export interface Technology {
  title: string;
  techs: string[];
}

export interface ProjectDetailItem {
  point: string;
  details: string[];
}

export interface ProjectHeader {
  title: string;
  publishDate: string;
  tags: string;
}

export interface ProjectInfo {
  ClientHeading: string;
  CompanyInfo: CompanyInfoItem[];
  ObjectivesHeading: string;
  ObjectivesDetails: string;
  Technologies: Technology[];
  ProjectDetailsHeading: string;
  ProjectDetails: ProjectDetailItem[];
  SocialSharingHeading?: string;
}

export interface Project {
  _id: string;
  title: string;
  url: string;
  category: string;
  type: string;
  img: string;
  ProjectHeader: ProjectHeader;
  ProjectImages: ProjectImage[];
  ProjectInfo: ProjectInfo;
  createdAt?: string;
  updatedAt?: string;
}

export interface About {
  _id: string;
  bio: string;
  order: number;
}

export interface Client {
  _id: string;
  title: string;
  img: string;
}

export interface Contact {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

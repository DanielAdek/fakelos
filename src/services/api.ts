import { IApiResponse, Project, About, Client, Contact } from '../types/api';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5050/api';

async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

// Projects
export async function getProjects(): Promise<IApiResponse<Project[]>> {
  return fetchApi<IApiResponse<Project[]>>('/projects');
}

export async function getProject(id: string): Promise<IApiResponse<Project>> {
  return fetchApi<IApiResponse<Project>>(`/projects/${id}`);
}

// About
export async function getAbout(): Promise<IApiResponse<About[]>> {
  return fetchApi<IApiResponse<About[]>>('/about');
}

// Clients
export async function getClients(): Promise<IApiResponse<Client[]>> {
  return fetchApi<IApiResponse<Client[]>>('/clients');
}

// Contact
export async function submitContact(data: Contact): Promise<IApiResponse<any>> {
  return fetchApi<IApiResponse<any>>('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

// Frontend/src/lib/api.ts
export type Project = {
  id: string | number;
  title: string;
  description?: string;
  fullDescription?: string;
  level?: "basic" | "intermediate" | "advanced";
  tags?: string[];
  language?: string;
  createdAt?: string;
  codeSnippet?: string;
  downloadUrl?: string;
  imageUrl?: string;
  githubUrl?: string;
};

const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:5000";

async function request<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`API ${path} failed: ${res.status} ${text}`);
  }
  return (await res.json()) as T;
}

export function fetchProjects(): Promise<Project[]> {
  return request<Project[]>("/api/projects");
}

export function fetchProjectById(id: string | number): Promise<Project | null> {
  // backend returns array, so try to find matching id
  return fetchProjects().then((list) => {
    const found = list.find((p) => String(p.id) === String(id));
    return found ?? null;
  });
}

export function fetchHero(): Promise<any> {
  return request<any>("/api/hero");
}

export function fetchCodeblocks(): Promise<any[]> {
  return request<any[]>("/api/codeblocks");
}
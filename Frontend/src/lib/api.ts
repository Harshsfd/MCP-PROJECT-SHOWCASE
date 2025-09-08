// Frontend/src/lib/api.ts
export const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:5000";

export async function fetchProjects(): Promise<any[]> {
  const res = await fetch(`${API_BASE}/api/projects`);
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
}
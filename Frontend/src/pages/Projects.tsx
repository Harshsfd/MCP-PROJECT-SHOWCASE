// Frontend/src/pages/Projects.tsx
import { useEffect, useState } from "react";
import { fetchProjects, Project } from "@/lib/api";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects()
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center">Loading projects...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="border rounded-xl shadow-lg p-4 hover:shadow-2xl transition"
        >
          <img
            src={project.imageUrl || project.image || "https://via.placeholder.com/150"}
            alt={project.title}
            className="w-full h-40 object-cover rounded-lg"
          />
          <h3 className="text-xl font-bold mt-2">{project.title}</h3>
          <p className="text-gray-600">{project.description}</p>
          {project.githubUrl || project.link ? (
            <a
              href={project.githubUrl || project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 block"
            >
              View Project →
            </a>
          ) : null}
        </div>
      ))}
    </div>
  );
}
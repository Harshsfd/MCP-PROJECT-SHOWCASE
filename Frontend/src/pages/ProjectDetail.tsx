// Frontend/src/pages/ProjectDetail.tsx
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useQuery } from "@tanstack/react-query";
import { fetchProjectById, Project } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data: project, isLoading, isError } = useQuery<Project | null>(
    ["project", id],
    () => fetchProjectById(id ?? ""),
    { enabled: !!id }
  );

  if (isLoading) return <div className="min-h-screen"><Navbar /><div className="p-8">Loading project...</div></div>;
  if (isError) return <div className="min-h-screen"><Navbar /><div className="p-8">Failed to load project.</div></div>;
  if (!project) return <div className="min-h-screen"><Navbar /><div className="p-8">Project not found.</div></div>;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container py-12">
        <div className="space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold">{project.title}</h1>
              {project.createdAt && (
                <div className="text-sm text-muted-foreground mt-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{project.createdAt}</span>
                </div>
              )}
            </div>
            <div>
              <Link to="/projects">
                <Button variant="outline">Back to Projects</Button>
              </Link>
            </div>
          </div>

          <section>
            <p className="prose">{project.fullDescription ?? project.description}</p>
          </section>

          {project.codeSnippet && (
            <section>
              <h3 className="text-lg font-medium">Code Snippet</h3>
              <pre className="rounded-md p-4 bg-muted overflow-auto"><code>{project.codeSnippet}</code></pre>
            </section>
          )}

          <div className="flex gap-3">
            {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer"><Button>Open on GitHub</Button></a>}
            {project.downloadUrl && <a href={project.downloadUrl}><Button variant="outline">Download</Button></a>}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
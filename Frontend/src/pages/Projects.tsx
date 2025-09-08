// Frontend/src/pages/Projects.tsx
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Code2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { useQuery } from "@tanstack/react-query";
import { fetchProjects, Project } from "@/lib/api";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const { data: projects = [], isLoading, isError } = useQuery<Project[]>(
    ["projects"],
    fetchProjects,
    {
      staleTime: 1000 * 60 * 2, // 2 minutes cache
      retry: 1,
    }
  );

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return projects.filter((p) => {
      if (selectedLevel && String(p.level).toLowerCase() !== selectedLevel) return false;
      if (!q) return true;
      return (
        (p.title && p.title.toLowerCase().includes(q)) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.tags && p.tags.join(" ").toLowerCase().includes(q))
      );
    });
  }, [projects, searchQuery, selectedLevel]);

  if (isLoading) return <div className="min-h-screen"><Navbar /><div className="p-8">Loading projects...</div></div>;
  if (isError) return <div className="min-h-screen"><Navbar /><div className="p-8">Failed to load projects from server.</div></div>;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="container py-12">
        <div className="mb-6 flex gap-4 items-center">
          <Input placeholder="Search projects..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <Button onClick={() => setSelectedLevel(null)}>All</Button>
          <Button onClick={() => setSelectedLevel("basic")}>Basic</Button>
          <Button onClick={() => setSelectedLevel("intermediate")}>Intermediate</Button>
          <Button onClick={() => setSelectedLevel("advanced")}>Advanced</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProjectCard key={String(p.id)} project={p as any} />
          ))}
        </div>

        {filtered.length === 0 && <div className="mt-8 text-center text-muted-foreground">No projects matched your search.</div>}
      </section>
    </div>
  );
};

export default Projects;
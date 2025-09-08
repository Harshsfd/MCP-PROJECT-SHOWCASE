import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Code2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { mockProjects } from "@/data/mockProjects";
import { fetchProjects, Project } from "@/lib/api";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const levels = [
    { value: "basic", label: "Basic", color: "bg-level-basic/20 text-level-basic border-level-basic/30" },
    { value: "intermediate", label: "Intermediate", color: "bg-level-intermediate/20 text-level-intermediate border-level-intermediate/30" },
    { value: "advanced", label: "Advanced", color: "bg-level-advanced/20 text-level-advanced border-level-advanced/30" },
  ];

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    mockProjects.forEach(project => {
      project.tags.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return mockProjects.filter(project => {
      const matchesSearch = !searchQuery || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesLevel = !selectedLevel || project.level === selectedLevel;
      
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => project.tags.includes(tag));
      
      return matchesSearch && matchesLevel && matchesTags;
    });
  }, [searchQuery, selectedLevel, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-gray-900">Project Showcase</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl">
            Explore curated projects with filters for level and technology.
          </p>
        </div>

        {/* Search + Filter Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-10">
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
            </div>

            {/* Levels */}
            <div className="flex gap-2 flex-wrap">
              {levels.map((level) => (
                <Button
                  key={level.value}
                  variant={selectedLevel === level.value ? "default" : "outline"}
                  onClick={() =>
                    setSelectedLevel(
                      selectedLevel === level.value ? null : level.value
                    )
                  }
                  className={`rounded-full px-4 ${level.color}`}
                >
                  {level.label}
                </Button>
              ))}
            </div>

            {/* Clear Filters */}
            {(selectedLevel || selectedTags.length > 0) && (
              <Button
                variant="ghost"
                onClick={() => {
                  setSelectedLevel(null);
                  setSelectedTags([]);
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`cursor-pointer transition ${
                  selectedTags.includes(tag)
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-200">
            <Filter className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
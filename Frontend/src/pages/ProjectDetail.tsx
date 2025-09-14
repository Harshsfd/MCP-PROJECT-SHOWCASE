import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Github, Share2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const projects = [
  {
    id: "1",
    title: "MCP Calculator",
    description:
      "A simple calculator built using Model Context Protocol to demonstrate basic integration.",
    difficulty: "Beginner",
    language: "JavaScript",
    created: "2024-01-10",
    tags: ["MCP", "Calculator", "Beginner"],
    codeExample: `const add = (a, b) => a + b;`,
  },
  {
    id: "2",
    title: "MCP Notes App",
    description:
      "A notes application showcasing CRUD operations with MCP implementation.",
    difficulty: "Intermediate",
    language: "TypeScript",
    created: "2024-02-01",
    tags: ["MCP", "Notes", "CRUD"],
    codeExample: `const createNote = (title, content) => ({ id: Date.now(), title, content });`,
  },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const { toast } = useToast();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <Card className="p-10 dark:bg-gray-800 text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Project Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            The project you are looking for does not exist.
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 py-16">
      <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-10">
        {/* Left Content */}
        <div className="lg:col-span-2">
          <Card className="mb-10 dark:bg-gray-800">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                  {project.difficulty}
                </Badge>
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                  {project.language}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                {project.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {project.description}
              </p>
              <div className="bg-gray-100 dark:bg-gray-900 p-5 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800 dark:text-gray-100">
                  <code>{project.codeExample}</code>
                </pre>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                {project.tags.map((tag, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="px-3 py-1 dark:bg-gray-700 dark:text-gray-200"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <Card className="dark:bg-gray-800">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Actions
              </h2>
              <Button
                className="w-full flex items-center justify-center gap-2"
                onClick={() =>
                  toast({ title: "Download started", description: "Your file is downloading..." })
                }
              >
                <Download className="h-4 w-4" /> Download
              </Button>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 dark:border-gray-400 dark:text-gray-100"
              >
                <Github className="h-4 w-4" /> View on GitHub
              </Button>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 dark:border-gray-400 dark:text-gray-100"
                onClick={() =>
                  toast({ title: "Link copied!", description: "Project link copied to clipboard." })
                }
              >
                <Share2 className="h-4 w-4" /> Share
              </Button>
            </CardContent>
          </Card>

          {/* Stats Section */}
          <Card className="dark:bg-gray-800">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Project Stats
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  <span className="font-semibold">Difficulty:</span>{" "}
                  {project.difficulty}
                </p>
                <p>
                  <span className="font-semibold">Language:</span>{" "}
                  {project.language}
                </p>
                <p>
                  <span className="font-semibold">Created:</span>{" "}
                  {project.created}
                </p>
                <p>
                  <span className="font-semibold">Tags:</span>{" "}
                  {project.tags.length}
                </p>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>

      {/* Similar Projects */}
      <section className="container mx-auto px-6 mt-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-12">
          Similar Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter((p) => p.id !== project.id)
            .map((p) => (
              <Card
                key={p.id}
                className="hover:shadow-xl transition-all duration-300 dark:bg-gray-700"
              >
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {p.description}
                  </p>
                  <Button
                    variant="outline"
                    className="mt-auto dark:border-gray-400 dark:text-gray-100"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>
    </div>
  );
}
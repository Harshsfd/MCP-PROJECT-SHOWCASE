import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";

const featuredProjects = [
  {
    id: "1",
    title: "MCP Calculator",
    description:
      "A simple calculator built using Model Context Protocol to demonstrate basic integration.",
    difficulty: "Beginner",
  },
  {
    id: "2",
    title: "MCP Notes App",
    description:
      "A notes application showcasing CRUD operations with MCP implementation.",
    difficulty: "Intermediate",
  },
  {
    id: "3",
    title: "MCP Chat App",
    description:
      "A real-time chat application built on top of MCP for advanced concepts.",
    difficulty: "Advanced",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 dark:bg-gray-700"
              >
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                      {project.difficulty}
                    </span>
                    <Link to={`/projects/${project.id}`}>
                      <Button
                        variant="outline"
                        className="dark:border-gray-400 dark:text-gray-100"
                      >
                        View
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn MCP */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-12">
            Why Learn MCP?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Hands-on Learning",
                desc: "Build real projects as you learn MCP concepts step by step.",
              },
              {
                title: "Progressive Difficulty",
                desc: "Projects range from beginner to advanced, matching your pace.",
              },
              {
                title: "Open Source",
                desc: "All projects and resources are open source and free to use.",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="hover:shadow-xl transition-all duration-300 dark:bg-gray-700"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your MCP Journey?
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Explore hands-on projects, improve your skills, and become MCP
            proficient.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link to="/projects">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Start Learning
              </Button>
            </Link>
            <Link to="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
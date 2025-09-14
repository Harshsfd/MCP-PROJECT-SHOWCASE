import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero / Intro */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">
            About MCP Showcase
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The MCP Showcase is an educational platform designed to help
            developers learn and implement the Model Context Protocol through
            hands-on projects.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Open Source Learning",
                desc: "Free and accessible projects for everyone.",
              },
              {
                title: "Practical Approach",
                desc: "Learn by building real-world applications.",
              },
              {
                title: "Community Driven",
                desc: "Contribute, share, and grow together.",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="hover:shadow-xl transition-all duration-300 dark:bg-gray-800"
              >
                <CardContent className="p-6 text-center">
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

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-gray-100">
            Technologies We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React",
              "Node.js",
              "Tailwind CSS",
              "Shadcn UI",
              "MCP",
              "Vercel",
            ].map((tech, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="px-4 py-2 text-sm dark:bg-gray-700 dark:text-gray-200"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
            Learning Path
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Beginner",
                desc: "Start with basic MCP integration projects.",
              },
              {
                title: "Intermediate",
                desc: "Build more complex applications with MCP.",
              },
              {
                title: "Advanced",
                desc: "Contribute to large-scale MCP implementations.",
              },
            ].map((level, i) => (
              <Card
                key={i}
                className="hover:shadow-xl transition-all duration-300 dark:bg-gray-800"
              >
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
                    {level.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{level.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Join the MCP Showcase community and start your learning journey
            today.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link to="/projects">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Explore Projects
              </Button>
            </Link>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Github className="mr-2 h-5 w-5" /> GitHub
                </Button>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                </Button>
              </a>
              <a href="mailto:example@email.com">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Mail className="mr-2 h-5 w-5" /> Email
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
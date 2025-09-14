import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: "1",
    title: "Getting Started with Model Context Protocol",
    description:
      "Learn the basics of MCP and how it transforms context management in AI applications.",
    date: "2024-01-15",
    category: "Beginner",
  },
  {
    id: "2",
    title: "Building Your First MCP Project",
    description:
      "Step-by-step guide to creating your first practical application using MCP.",
    date: "2024-02-01",
    category: "Tutorial",
  },
  {
    id: "3",
    title: "Best Practices for MCP Integration",
    description:
      "Discover recommended practices and patterns for implementing MCP in real projects.",
    date: "2024-02-15",
    category: "Advanced",
  },
];

const categories = ["All", "Beginner", "Tutorial", "Advanced"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">
            MCP Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest tutorials, guides, and best practices
            for Model Context Protocol.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <Badge
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-sm cursor-pointer transition-all ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white dark:bg-blue-500"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {cat}
            </Badge>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-12">
            Featured Post
          </h2>
          <Card className="max-w-3xl mx-auto hover:shadow-xl transition-all duration-300 dark:bg-gray-800">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
                {blogPosts[0].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {blogPosts[0].description}
              </p>
              <div className="flex justify-between items-center">
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                  {blogPosts[0].category}
                </Badge>
                <Link to={`/blog/${blogPosts[0].id}`}>
                  <Button
                    variant="outline"
                    className="dark:border-gray-400 dark:text-gray-100"
                  >
                    Read More
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-12">
            All Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="hover:shadow-xl transition-all duration-300 dark:bg-gray-700"
              >
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {post.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.date}
                    </span>
                    <Link to={`/blog/${post.id}`}>
                      <Button
                        variant="outline"
                        className="dark:border-gray-400 dark:text-gray-100"
                      >
                        Read
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Get the latest MCP tutorials, guides, and updates delivered straight
            to your inbox.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg w-full md:w-2/3 text-gray-900 focus:outline-none"
            />
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
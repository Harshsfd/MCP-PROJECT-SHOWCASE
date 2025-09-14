About ( import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
Code2,
Users,
Zap,
Shield,
BookOpen,
Github,
Mail,
ExternalLink,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

const About = () => {
const features = [
{
icon: Code2,
title: "Open Source",
description: "All projects are open source and available for learning and contribution.",
},
{
icon: BookOpen,
title: "Educational",
description: "Designed to teach MCP concepts from basic to advanced implementations.",
},
{
icon: Zap,
title: "Modern Tech",
description: "Built with cutting-edge technologies and best practices.",
},
{
icon: Shield,
title: "Production Ready",
description: "Includes security, performance, and scalability considerations.",
},
{
icon: Users,
title: "Community Driven",
description: "Built by developers, for developers, with community feedback.",
},
];

const skills = [
"Python",
"JavaScript",
"React",
"Node.js",
"Docker",
"Kubernetes",
"PostgreSQL",
"MongoDB",
"Redis",
"WebSocket",
"JWT",
"OAuth2",
];

return (
<div className="min-h-screen bg-background">
<Navbar />

<main className="pt-16">  
    {/* Hero Section */}  
    <section className="py-20 bg-gradient-card">  
      <div className="container mx-auto px-4 text-center">  
        <div className="max-w-4xl mx-auto">  
          <div className="flex justify-center mb-6">  
            <div className="p-4 rounded-full bg-gradient-primary glow-effect">  
              <Code2 className="w-8 h-8 text-primary-foreground" />  
            </div>  
          </div>  

          <h1 className="text-4xl md:text-6xl font-bold mb-6">  
            About <span className="gradient-text">MCP Showcase</span>  
          </h1>  

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">  
            A comprehensive platform dedicated to showcasing Model Context Protocol (MCP)   
            implementations, from foundational concepts to enterprise-grade solutions.   
            Built to accelerate learning and adoption of MCP technology.  
          </p>  
        </div>  
      </div>  
    </section>  

    {/* Mission Section */}  
    <section className="py-16">  
      <div className="container mx-auto px-4">  
        <div className="max-w-3xl mx-auto text-center mb-16">  
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>  
          <p className="text-lg text-muted-foreground leading-relaxed">  
            To democratize access to Model Context Protocol knowledge by providing   
            high-quality, practical implementations that developers can learn from,   
            build upon, and deploy in their own projects.  
          </p>  
        </div>  

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">  
          {features.map((feature, index) => (  
            <Card  
              key={index}  
              className="glass-card p-6 text-center group hover:shadow-elevated transition-all duration-300"  
            >  
              <div className="inline-flex p-3 rounded-full bg-gradient-primary/10 mb-4 group-hover:bg-gradient-primary/20 transition-colors">  
                <feature.icon className="w-6 h-6 text-primary" />  
              </div>  
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>  
              <p className="text-muted-foreground text-sm">{feature.description}</p>  
            </Card>  
          ))}  
        </div>  
      </div>  
    </section>  

    {/* Technologies */}  
    <section className="py-16 bg-gradient-card/50">  
      <div className="container mx-auto px-4">  
        <div className="text-center mb-12">  
          <h2 className="text-3xl font-bold mb-4">Technologies We Use</h2>  
          <p className="text-muted-foreground max-w-2xl mx-auto">  
            Our projects leverage modern, industry-standard technologies to ensure   
            relevance and applicability in real-world scenarios.  
          </p>  
        </div>  

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">  
          {skills.map((skill) => (  
            <Badge  
              key={skill}  
              variant="secondary"  
              className="px-4 py-2 text-sm bg-card/50 hover:bg-primary/20 transition-colors cursor-default"  
            >  
              {skill}  
            </Badge>  
          ))}  
        </div>  
      </div>  
    </section>  

    {/* Project Levels */}  
    <section className="py-16">  
      <div className="container mx-auto px-4">  
        <div className="text-center mb-12">  
          <h2 className="text-3xl font-bold mb-4">Learning Path</h2>  
          <p className="text-muted-foreground max-w-2xl mx-auto">  
            Our projects are structured in three levels to support your learning journey  
          </p>  
        </div>  

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">  
          <Card className="glass-card p-8 text-center">  
            <Badge className="bg-level-basic/20 text-level-basic border-level-basic/30 mb-4">  
              BASIC  
            </Badge>  
            <h3 className="text-xl font-semibold mb-3">Foundation</h3>  
            <p className="text-muted-foreground mb-4">  
              Learn MCP fundamentals with simple, well-documented examples  
            </p>  
            <ul className="text-sm text-muted-foreground space-y-1">  
              <li>• Basic server setup</li>  
              <li>• Simple client connections</li>  
              <li>• Core concepts</li>  
            </ul>  
          </Card>  

          <Card className="glass-card p-8 text-center">  
            <Badge className="bg-level-intermediate/20 text-level-intermediate border-level-intermediate/30 mb-4">  
              INTERMEDIATE  
            </Badge>  
            <h3 className="text-xl font-semibold mb-3">Application</h3>  
            <p className="text-muted-foreground mb-4">  
              Build practical applications with real-world features  
            </p>  
            <ul className="text-sm text-muted-foreground space-y-1">  
              <li>• Database integration</li>  
              <li>• Real-time features</li>  
              <li>• Performance optimization</li>  
            </ul>  
          </Card>  

          <Card className="glass-card p-8 text-center">  
            <Badge className="bg-level-advanced/20 text-level-advanced border-level-advanced/30 mb-4">  
              ADVANCED  
            </Badge>  
            <h3 className="text-xl font-semibold mb-3">Enterprise</h3>  
            <p className="text-muted-foreground mb-4">  
              Production-ready solutions with advanced architecture  
            </p>  
            <ul className="text-sm text-muted-foreground space-y-1">  
              <li>• Microservices architecture</li>  
              <li>• Security implementation</li>  
              <li>• Scalability patterns</li>  
            </ul>  
          </Card>  
        </div>  
      </div>  
    </section>  

    {/* Contact/CTA */}  
    <section className="py-16 bg-gradient-card">  
      <div className="container mx-auto px-4 text-center">  
        <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>  
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">  
          Ready to dive into Model Context Protocol development?   
          Explore our projects and start building amazing applications.  
        </p>  

        <div className="flex flex-col sm:flex-row gap-4 justify-center">  
          {/* Internal navigation */}  
          <Link to="/projects">  
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow">  
              <Code2 className="w-4 h-4 mr-2" />  
              Browse Projects  
            </Button>  
          </Link>  

          {/* GitHub Link */}  
          <a  
            href="https://github.com/Harshsfd"  
            target="_blank"  
            rel="noopener noreferrer"  
          >  
            <Button variant="outline" size="lg" className="glass-card">  
              <Github className="w-4 h-4 mr-2" />  
              View on GitHub  
            </Button>  
          </a>  

          {/* LinkedIn Link */}  
          <a  
            href="https://www.linkedin.com/in/harshsfd"  
            target="_blank"  
            rel="noopener noreferrer"  
          >  
            <Button variant="outline" size="lg" className="glass-card">  
              <ExternalLink className="w-4 h-4 mr-2" />  
              LinkedIn  
            </Button>  
          </a>  

          {/* Email Link */}  
          <a href="mailto:harshbhardwajsfd@gmail.com">  
            <Button variant="outline" size="lg" className="glass-card">  
              <Mail className="w-4 h-4 mr-2" />  
              Contact Us  
            </Button>  
          </a>  
        </div>  
      </div>  
    </section>  
  </main>  
</div>

);
};

export default About;
) blog ( import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

const blogPosts = [
{
id: "1",
title: "Getting Started with Model Context Protocol",
excerpt: "A comprehensive introduction to MCP concepts, architecture, and implementation patterns for modern applications.",
category: "Tutorial",
readTime: "8 min read",
publishDate: "2024-01-28",
featured: true
},
{
id: "2",
title: "Building Scalable MCP Applications",
excerpt: "Learn advanced patterns for building production-ready MCP systems that can handle enterprise-scale workloads.",
category: "Advanced",
readTime: "12 min read",
publishDate: "2024-01-25"
},
{
id: "3",
title: "MCP Security Best Practices",
excerpt: "Essential security considerations when implementing Model Context Protocol in production environments.",
category: "Security",
readTime: "10 min read",
publishDate: "2024-01-22"
},
{
id: "4",
title: "Integrating MCP with Modern Databases",
excerpt: "Comprehensive guide to connecting your MCP servers with PostgreSQL, MongoDB, and Redis for persistent context storage.",
category: "Integration",
readTime: "15 min read",
publishDate: "2024-01-20"
},
{
id: "5",
title: "Performance Optimization for MCP Systems",
excerpt: "Techniques and strategies to optimize your MCP implementation for maximum throughput and minimal latency.",
category: "Performance",
readTime: "11 min read",
publishDate: "2024-01-18"
},
{
id: "6",
title: "MCP Design Patterns and Architecture",
excerpt: "Explore common design patterns and architectural approaches for building maintainable MCP applications.",
category: "Architecture",
readTime: "9 min read",
publishDate: "2024-01-15"
},
{
id: "7",
title: "Deploying MCP on Vercel and AWS",
excerpt: "Step-by-step guide to deploying MCP applications on popular cloud platforms like Vercel and AWS.",
category: "Deployment",
readTime: "13 min read",
publishDate: "2024-01-10"
},
{
id: "8",
title: "Debugging MCP Applications",
excerpt: "Learn effective strategies and tools for debugging MCP-based systems in development and production.",
category: "Debugging",
readTime: "10 min read",
publishDate: "2024-01-07"
},
{
id: "9",
title: "MCP for Real-time Applications",
excerpt: "How to integrate MCP into real-time systems like chat apps, multiplayer games, and IoT devices.",
category: "Realtime",
readTime: "14 min read",
publishDate: "2024-01-05"
},
{
id: "10",
title: "Testing Strategies for MCP Projects",
excerpt: "Comprehensive testing techniques to ensure reliability and stability of your MCP implementations.",
category: "Testing",
readTime: "12 min read",
publishDate: "2024-01-02"
},
{
id: "11",
title: "MCP with Frontend Frameworks",
excerpt: "Integrating MCP seamlessly with React, Next.js, and other frontend frameworks.",
category: "Frontend",
readTime: "9 min read",
publishDate: "2023-12-30"
},
{
id: "12",
title: "Future of Model Context Protocol",
excerpt: "Exploring upcoming trends, research, and innovations shaping the future of MCP.",
category: "Insights",
readTime: "7 min read",
publishDate: "2023-12-25"
}
];

const categories = [
"All",
"Tutorial",
"Advanced",
"Security",
"Integration",
"Performance",
"Architecture",
"Deployment",
"Debugging",
"Realtime",
"Testing",
"Frontend",
"Insights"
];

const Blog = () => {
return (
<div className="min-h-screen bg-background">
<Navbar />

<main className="pt-16">  
    {/* Header */}  
    <section className="py-16 bg-gradient-card border-b border-border/30">  
      <div className="container mx-auto px-4 text-center">  
        <div className="flex justify-center mb-6">  
          <div className="p-4 rounded-full bg-gradient-primary glow-effect">  
            <BookOpen className="w-8 h-8 text-primary-foreground" />  
          </div>  
        </div>  
        <h1 className="text-4xl md:text-5xl font-bold mb-4">  
          <span className="gradient-text">MCP</span> Blog  
        </h1>  
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">  
          In-depth tutorials, best practices, and insights about Model Context Protocol   
          development from our team and community contributors.  
        </p>  
      </div>  
    </section>  

    {/* Categories */}  
    <section className="py-8 border-b border-border/30">  
      <div className="container mx-auto px-4">  
        <div className="flex flex-wrap justify-center gap-2">  
          {categories.map((category) => (  
            <Badge  
              key={category}  
              variant={category === "All" ? "default" : "outline"}  
              className="cursor-pointer hover:bg-primary/20 transition-colors px-4 py-2"  
            >  
              {category}  
            </Badge>  
          ))}  
        </div>  
      </div>  
    </section>  

    {/* Featured Post */}  
    {blogPosts.find(post => post.featured) && (  
      <section className="py-12">  
        <div className="container mx-auto px-4">  
          <div className="mb-8">  
            <h2 className="text-2xl font-semibold mb-2">Featured Article</h2>  
            <p className="text-muted-foreground">Don't miss our latest comprehensive guide</p>  
          </div>  
            
          {(() => {  
            const featuredPost = blogPosts.find(post => post.featured)!;  
            return (  
              <Card className="glass-card p-8 hover:shadow-elevated transition-all duration-300 group cursor-pointer">  
                <div className="grid md:grid-cols-2 gap-8 items-center">  
                  <div>  
                    <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">  
                      Featured  
                    </Badge>  
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">  
                      {featuredPost.title}  
                    </h3>  
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">  
                      {featuredPost.excerpt}  
                    </p>  
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">  
                      <div className="flex items-center gap-1">  
                        <Calendar className="w-4 h-4" />  
                        {new Date(featuredPost.publishDate).toLocaleDateString()}  
                      </div>  
                      <div className="flex items-center gap-1">  
                        <Clock className="w-4 h-4" />  
                        {featuredPost.readTime}  
                      </div>  
                      <Badge variant="outline">{featuredPost.category}</Badge>  
                    </div>  
                    <Button className="bg-gradient-primary hover:shadow-glow group">  
                      Read Article  
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />  
                    </Button>  
                  </div>  
                  <div className="h-64 bg-gradient-card rounded-lg flex items-center justify-center">  
                    <BookOpen className="w-16 h-16 text-muted-foreground" />  
                  </div>  
                </div>  
              </Card>  
            );  
          })()}  
        </div>  
      </section>  
    )}  

    {/* All Posts */}  
    <section className="py-12">  
      <div className="container mx-auto px-4">  
        <h2 className="text-2xl font-semibold mb-8">All Articles</h2>  
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">  
          {blogPosts.filter(post => !post.featured).map((post) => (  
            <Card   
              key={post.id}   
              className="glass-card overflow-hidden group hover:shadow-elevated transition-all duration-300 cursor-pointer"  
            >  
              <div className="h-48 bg-gradient-card flex items-center justify-center border-b border-border/30">  
                <BookOpen className="w-12 h-12 text-muted-foreground" />  
              </div>  
                
              <div className="p-6">  
                <Badge   
                  variant="outline"   
                  className="mb-3 text-xs"  
                >  
                  {post.category}  
                </Badge>  
                  
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">  
                  {post.title}  
                </h3>  
                  
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">  
                  {post.excerpt}  
                </p>  
                  
                <div className="flex items-center justify-between text-xs text-muted-foreground">  
                  <div className="flex items-center gap-1">  
                    <Calendar className="w-3 h-3" />  
                    {new Date(post.publishDate).toLocaleDateString()}  
                  </div>  
                  <div className="flex items-center gap-1">  
                    <Clock className="w-3 h-3" />  
                    {post.readTime}  
                  </div>  
                </div>  
              </div>  
            </Card>  
          ))}  
        </div>  
      </div>  
    </section>  

    {/* Newsletter CTA */}  
    <section className="py-16 bg-gradient-card border-t border-border/30">  
      <div className="container mx-auto px-4 text-center">  
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>  
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">  
          Get notified when we publish new MCP tutorials, guides, and insights.   
          Join our growing community of developers.  
        </p>  
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">  
          <input  
            type="email"  
            placeholder="Enter your email"  
            className="flex-1 px-4 py-2 rounded-lg bg-card/50 border border-border/30 focus:outline-none focus:ring-2 focus:ring-primary"  
          />  
          <Button className="bg-gradient-primary hover:shadow-glow">  
            Subscribe  
          </Button>  
        </div>  
      </div>  
    </section>  
  </main>  
</div>

);
};

export default Blog;) index ( import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { mockProjects } from "@/data/mockProjects";

const Index = () => {
const featuredProjects = mockProjects.slice(0, 6);

return (
<div className="min-h-screen bg-background">
<Navbar />
<Hero />

{/* Featured Projects */}  
  <section className="py-20 border-t border-border/30">  
    <div className="container mx-auto px-4">  
      <div className="text-center mb-16">  
        <h2 className="text-3xl md:text-4xl font-bold mb-4">  
          Featured <span className="gradient-text">Projects</span>  
        </h2>  
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">  
          Explore our handpicked selection of MCP implementations across all skill levels  
        </p>  
      </div>  

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">  
        {featuredProjects.map((project) => (  
          <ProjectCard key={project.id} project={project} />  
        ))}  
      </div>  

      <div className="text-center">  
        <Link to="/projects">  
          <Button size="lg" variant="outline" className="glass-card hover:bg-card/50 group">  
            View All Projects  
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />  
          </Button>  
        </Link>  
      </div>  
    </div>  
  </section>  

  {/* Why Choose MCP Section */}  
  <section className="py-20 bg-gradient-card/50">  
    <div className="container mx-auto px-4">  
      <div className="text-center mb-16">  
        <h2 className="text-3xl md:text-4xl font-bold mb-4">  
          Why Learn <span className="gradient-text">MCP</span>?  
        </h2>  
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">  
          Model Context Protocol is revolutionizing how applications share and manage context  
        </p>  
      </div>  

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">  
        <div className="text-center">  
          <div className="inline-flex p-4 rounded-full bg-gradient-primary/10 mb-6 glow-effect">  
            <Zap className="w-8 h-8 text-primary" />  
          </div>  
          <h3 className="text-xl font-semibold mb-3">High Performance</h3>  
          <p className="text-muted-foreground">  
            Optimized for real-time applications with minimal latency and maximum throughput  
          </p>  
        </div>  

        <div className="text-center">  
          <div className="inline-flex p-4 rounded-full bg-gradient-primary/10 mb-6 glow-effect">  
            <Shield className="w-8 h-8 text-primary" />  
          </div>  
          <h3 className="text-xl font-semibold mb-3">Enterprise Ready</h3>  
          <p className="text-muted-foreground">  
            Built-in security, scalability, and reliability features for production deployments  
          </p>  
        </div>  

        <div className="text-center">  
          <div className="inline-flex p-4 rounded-full bg-gradient-primary/10 mb-6 glow-effect">  
            <Code2 className="w-8 h-8 text-primary" />  
          </div>  
          <h3 className="text-xl font-semibold mb-3">Developer Friendly</h3>  
          <p className="text-muted-foreground">  
            Clean APIs, comprehensive documentation, and extensive tooling support  
          </p>  
        </div>  
      </div>  
    </div>  
  </section>  

  {/* CTA Section */}  
  <section className="py-20 border-t border-border/30">  
    <div className="container mx-auto px-4 text-center">  
      <h2 className="text-3xl md:text-4xl font-bold mb-4">  
        Ready to Start Building?  
      </h2>  
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">  
        Join thousands of developers already building amazing applications with MCP  
      </p>  
        
      <div className="flex flex-col sm:flex-row gap-4 justify-center">  
        <Link to="/projects">  
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow px-8 py-4 text-lg">  
            <Code2 className="w-5 h-5 mr-2" />  
            Start Learning  
          </Button>  
        </Link>  
          
        <Link to="/about">  
          <Button size="lg" variant="outline" className="glass-card hover:bg-card/50 px-8 py-4 text-lg">  
            Learn More  
          </Button>  
        </Link>  
      </div>  
    </div>  
  </section>  
</div>

);
};

export default Index;


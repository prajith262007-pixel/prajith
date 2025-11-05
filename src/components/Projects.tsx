import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { ParticlesBackground } from "./ParticlesBackground";

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Cybersecurity Dashboard",
      description: "Real-time security monitoring and threat detection system with advanced analytics",
      tech: ["React", "Python", "TensorFlow"],
      color: "from-primary to-accent",
      delay: 0.2,
    },
    {
      title: "Creative Portfolio Platform",
      description: "Modern portfolio builder for creators with drag-and-drop functionality",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      color: "from-secondary to-primary",
      delay: 0.3,
    },
    {
      title: "Video Editing Suite",
      description: "Web-based video editor with AI-powered effects and transitions",
      tech: ["React", "WebGL", "FFmpeg"],
      color: "from-accent to-secondary",
      delay: 0.4,
    },
    {
      title: "UI Component Library",
      description: "Comprehensive design system with accessible and reusable components",
      tech: ["React", "Storybook", "CSS"],
      color: "from-primary to-secondary",
      delay: 0.5,
    },
  ];

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <ParticlesBackground variant="minimal" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background -z-5" />

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-glow-accent">Featured Projects</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-accent via-primary to-secondary mx-auto mb-6" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Showcasing innovative solutions and creative implementations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: project.delay }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              {/* Glow effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl blur-2xl opacity-0 transition-opacity duration-500`}
                animate={{
                  opacity: hoveredIndex === index ? 0.6 : 0,
                }}
              />

              {/* Card */}
              <motion.div
                className="relative bg-card border border-primary/30 rounded-2xl p-8 h-full overflow-hidden group-hover:border-primary transition-all duration-300"
                whileHover={{ y: -10, rotateX: 5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

                {/* Project Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6`}
                  animate={{
                    rotate: hoveredIndex === index ? 360 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <Code2 className="w-8 h-8 text-background" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-mono text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary rounded-lg text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-semibold">Code</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary/20 border border-secondary rounded-lg text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-semibold">Demo</span>
                  </motion.button>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-secondary/20 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

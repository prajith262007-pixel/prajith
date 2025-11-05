import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Video, Shield, Database, Globe } from "lucide-react";

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills = [
    {
      icon: Code2,
      title: "Web Development",
      description: "React, TypeScript, Tailwind CSS",
      color: "from-primary to-accent",
      delay: 0.2,
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Network Security, Ethical Hacking",
      color: "from-secondary to-primary",
      delay: 0.3,
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video production",
      color: "from-accent to-secondary",
      delay: 0.4,
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Figma, Adobe XD, User Research",
      color: "from-primary to-secondary",
      delay: 0.5,
    },
    {
      icon: Database,
      title: "Programming",
      description: "Python, Java, C++",
      color: "from-secondary to-accent",
      delay: 0.6,
    },
    {
      icon: Globe,
      title: "Full Stack",
      description: "Frontend & Backend Development",
      color: "from-accent to-primary",
      delay: 0.7,
    },
  ];

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background -z-10" />

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-glow-secondary">Skills & Expertise</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-secondary via-accent to-primary mx-auto mb-6" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A diverse skill set combining technical expertise with creative vision
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: skill.delay }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative bg-card border border-primary/30 rounded-xl p-8 hover:border-primary transition-all duration-300 h-full">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <skill.icon className="w-8 h-8 text-background" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {skill.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Programming Languages Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 p-8 bg-card border border-primary/30 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Programming Languages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Python", "Java", "C++", "JavaScript", "TypeScript", "HTML/CSS"].map((lang, index) => (
              <motion.span
                key={lang}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="px-6 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/50 rounded-full text-sm font-mono hover:border-primary hover:shadow-neon-primary transition-all duration-300 cursor-default"
              >
                {lang}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

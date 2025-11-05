import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profileImage from "@/assets/profile.jpeg";
import { Code2, Palette, Video, Shield } from "lucide-react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const highlights = [
    { icon: Shield, title: "Cybersecurity", color: "text-primary" },
    { icon: Code2, title: "Web Development", color: "text-secondary" },
    { icon: Video, title: "Video Editing", color: "text-accent" },
    { icon: Palette, title: "UI/UX Design", color: "text-primary" },
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background -z-10" />
      
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-glow-primary">About Me</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary via-secondary to-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-2xl border-2 border-primary/50 group-hover:border-primary transition-colors duration-300">
                <img
                  src={profileImage}
                  alt="S.T. PRAJITH"
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I am currently pursuing <span className="text-primary font-semibold">Cyber Security</span>, 
                driven by a passion for protecting digital ecosystems. My journey spans across multiple 
                creative and technical domains.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I specialize in <span className="text-secondary font-semibold">Web Development</span>, 
                crafting responsive and interactive user experiences. My expertise extends to{" "}
                <span className="text-accent font-semibold">Video Editing</span> and{" "}
                <span className="text-primary font-semibold">UI/UX Design</span>, where I blend 
                aesthetics with functionality.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Proficient in <span className="font-mono text-primary">Python</span>,{" "}
                <span className="font-mono text-secondary">Java</span>, and{" "}
                <span className="font-mono text-accent">C++</span>, I leverage these languages 
                to solve complex problems and build innovative solutions.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="p-4 bg-card border border-primary/30 rounded-lg hover:border-primary hover:shadow-neon-primary transition-all duration-300 group"
                >
                  <item.icon className={`w-8 h-8 ${item.color} mb-2 group-hover:scale-110 transition-transform`} />
                  <p className="text-sm font-semibold text-foreground/80">{item.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Youtube, Twitter, FileDown } from "lucide-react";

const Index = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      
      {/* Resume Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background -z-10" />
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-glow-secondary">Download My Resume</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Get a comprehensive overview of my skills, experience, and achievements
            </p>
            <motion.a
              href="/resume.jpg"
              download="ST_Prajith_Resume.jpg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold text-lg shadow-neon-primary hover:shadow-neon-secondary transition-all duration-300"
            >
              <FileDown className="w-6 h-6" />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Contact />

      {/* Footer */}
      <footer className="relative py-12 border-t border-primary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6">
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 rounded-lg bg-card border border-primary/30 flex items-center justify-center hover:border-primary hover:shadow-neon-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-primary" />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center text-foreground/60">
              <p className="text-sm">
                © {new Date().getFullYear()} S.T. PRAJITH. All rights reserved.
              </p>
              <p className="text-xs mt-2">
                Built with React, Three.js, Framer Motion & Particles.js
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

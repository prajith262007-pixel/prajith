import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";
import { ParticlesBackground } from "./ParticlesBackground";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

export const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground variant="cyber" />
      
      {/* 3D Background */}
      <div className="absolute inset-0 -z-5 opacity-30">
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 1, 1]} intensity={1} />
          <Sphere args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial
              color="#00FFF0"
              attach="material"
              distort={0.5}
              speed={2}
              roughness={0.2}
            />
          </Sphere>
        </Canvas>
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main heading with glitch effect */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-glow-primary">Hi, I'm</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              S.T. PRAJITH
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            className="text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-8 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p className="font-light">
              <span className="text-primary">Cybersecurity Student</span> |{" "}
              <span className="text-secondary">Web Developer</span>
            </p>
            <p className="font-light">
              <span className="text-accent">Video Editor</span> |{" "}
              <span className="text-primary">UI/UX Designer</span>
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg shadow-neon-primary hover:shadow-neon-secondary hover:bg-secondary transition-all duration-300 hover:scale-105"
            >
              Explore My Work
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-card border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:shadow-neon-primary transition-all duration-300">
                  <social.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

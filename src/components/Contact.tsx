import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Send, MapPin } from "lucide-react";
import { ParticlesBackground } from "./ParticlesBackground";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    try {
      contactSchema.parse(formData);
      setErrors({});
      
      // Create mailto link with form data
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:prajith0962@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      toast.success("Opening your email client...");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast.error("Please fix the errors in the form");
      }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "prajith0962@gmail.com",
      href: "mailto:prajith0962@gmail.com",
      color: "text-primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9080018433",
      href: "tel:+919080018433",
      color: "text-secondary",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#",
      color: "text-accent",
    },
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <ParticlesBackground variant="minimal" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background -z-5" />

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-glow-primary">Get In Touch</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and create something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-6 bg-card border border-primary/30 rounded-xl hover:border-primary hover:shadow-neon-primary transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <info.icon className={`w-7 h-7 ${info.color}`} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">{info.label}</p>
                    <p className="text-lg font-semibold text-foreground">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground/80">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  className={`w-full px-4 py-3 bg-card border ${
                    errors.name ? "border-destructive" : "border-primary/30"
                  } rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all duration-300 text-foreground`}
                  placeholder="John Doe"
                  maxLength={100}
                />
                {errors.name && (
                  <p className="text-sm text-destructive mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground/80">
                  Your Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: "" });
                  }}
                  className={`w-full px-4 py-3 bg-card border ${
                    errors.email ? "border-destructive" : "border-primary/30"
                  } rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all duration-300 text-foreground`}
                  placeholder="john@example.com"
                  maxLength={255}
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground/80">
                  Your Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: "" });
                  }}
                  rows={6}
                  className={`w-full px-4 py-3 bg-card border ${
                    errors.message ? "border-destructive" : "border-primary/30"
                  } rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all duration-300 resize-none text-foreground`}
                  placeholder="Tell me about your project..."
                  maxLength={1000}
                />
                {errors.message && (
                  <p className="text-sm text-destructive mt-1">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg shadow-neon-primary hover:shadow-neon-secondary hover:bg-secondary transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

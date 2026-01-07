import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ChevronDown,
  Sparkles,
  Code2,
  Brain,
  Rocket,
} from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const floatingElements = [
    { Icon: Code2, delay: 0, x: "10%", y: "20%" },
    { Icon: Brain, delay: 1, x: "85%", y: "30%" },
    { Icon: Rocket, delay: 2, x: "15%", y: "70%" },
    { Icon: Sparkles, delay: 1.5, x: "80%", y: "65%" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Icons */}
        {floatingElements.map((item, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: item.x, top: item.y }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + index,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <item.Icon className="w-12 h-12 text-purple-300/40" />
          </motion.div>
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white mb-6"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(168, 85, 247, 0.4)",
                  "0 0 40px rgba(168, 85, 247, 0.6)",
                  "0 0 20px rgba(168, 85, 247, 0.4)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">
                Welcome to my portfolio
              </span>
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ishika Jain
          </motion.h1>

          <motion.p
            className="text-xl md:text-3xl text-gray-300 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            B.Tech CSE Student | Technology Enthusiast
          </motion.p>

          <motion.p
            className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate about driving innovation through machine
            learning, cybersecurity, and strategic project
            execution
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="mailto:ishikajain@jklu.edu.in"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </motion.a>
            <motion.a
              href="tel:+916367141046"
              className="flex items-center gap-2 px-6 py-3 border-2 border-purple-400 text-purple-300 rounded-full backdrop-blur-sm bg-white/5 hover:bg-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              +91-6367141046
            </motion.a>
          </motion.div>

          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              href="https://github.com/ishikajain0203"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-3 bg-white/5 rounded-full backdrop-blur-sm"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ishika-jain-973a79274/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors p-3 bg-white/5 rounded-full backdrop-blur-sm"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-purple-300 hover:text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
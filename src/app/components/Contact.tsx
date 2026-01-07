import {
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  Send,
  Sparkles,
  Code,
  Rocket,
} from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "motion/react";
import { useState } from "react";

export function Contact() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const contactCards = [
    {
      icon: Mail,
      label: "Email",
      value: "ishikajain@jklu.edu.in",
      href: "mailto:ishikajain@jklu.edu.in",
      color: "blue",
      gradient: "from-blue-400 to-cyan-400",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-6367141046",
      href: "tel:+916367141046",
      color: "green",
      gradient: "from-green-400 to-emerald-400",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ishikajain",
      href: "https://github.com/ishikajain0203",
      color: "gray",
      gradient: "from-gray-700 to-gray-900",
      bgGradient: "from-gray-50 to-slate-50",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ishikajain",
      href: "https://www.linkedin.com/in/ishika-jain-973a79274/",
      color: "blue",
      gradient: "from-blue-500 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50",
    },
  ];

  const floatingIcons = [
    { Icon: Code, delay: 0, duration: 3 },
    { Icon: Rocket, delay: 1, duration: 4 },
    { Icon: Sparkles, delay: 2, duration: 3.5 },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${20 + index * 30}%`,
              top: `${30 + index * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <item.Icon className="w-8 h-8 text-purple-300/40" />
          </motion.div>
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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
            <span className="text-sm">Let's Connect</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about technology and innovation!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <motion.a
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block h-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card
                      className={`p-6 h-full bg-gradient-to-br ${card.bgGradient} border-2 border-white/20 backdrop-blur-sm relative overflow-hidden group`}
                    >
                      {/* Animated gradient overlay */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />

                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={
                          hoveredCard === index
                            ? { x: "100%" }
                            : { x: "-100%" }
                        }
                        transition={{ duration: 0.6 }}
                      />

                      <div className="flex items-center gap-4 relative z-10">
                        <motion.div
                          className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                          animate={
                            hoveredCard === index
                              ? { rotate: [0, -10, 10, -10, 0], scale: 1.1 }
                              : { rotate: 0, scale: 1 }
                          }
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-600 mb-1">
                            {card.label}
                          </p>
                          <p className="text-gray-900 break-all">
                            {card.value}
                          </p>
                        </div>
                        <motion.div
                          animate={
                            hoveredCard === index
                              ? { x: 5, opacity: 1 }
                              : { x: 0, opacity: 0.5 }
                          }
                        >
                          <Send className="w-5 h-5 text-gray-600" />
                        </motion.div>
                      </div>
                    </Card>
                  </motion.a>
                </motion.div>
              );
            })}
          </div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8 bg-white/10 backdrop-blur-md border-2 border-white/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(236, 72, 153, 0.5)",
                        "0 0 40px rgba(168, 85, 247, 0.5)",
                        "0 0 20px rgba(236, 72, 153, 0.5)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <MapPin className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-purple-300">Based in</p>
                    <p className="text-xl text-white">
                      Jaipur, Rajasthan, India
                    </p>
                  </div>
                </div>

                <motion.div
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                      "0 0 30px rgba(168, 85, 247, 0.5)",
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <p className="text-sm">🚀 Open to Opportunities</p>
                </motion.div>
              </div>
            </Card>
          </motion.div>

          {/* Availability Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <Card className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-400/30">
              <p className="text-purple-200">
                Available for{" "}
                <span className="text-white">internships</span>,{" "}
                <span className="text-white">project collaborations</span>, and{" "}
                <span className="text-white">full-time opportunities</span> in
                Project Management, Software Development, and Technology
                Innovation
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
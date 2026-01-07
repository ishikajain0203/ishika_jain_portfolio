import { Award, GraduationCap, Target, Lightbulb } from 'lucide-react';
import { Card } from './ui/card';
import { motion } from 'motion/react';

export function About() {
  const cards = [
    {
      icon: Target,
      title: 'Career Objective',
      description: 'Seeking an entry-level role in project management and technology development to apply my expertise in machine learning, optimization, and cybersecurity',
      gradient: 'from-blue-400 to-cyan-400',
      delay: 0.2
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'B.Tech CSE (3rd Year) at JK Lakshmipat University with 8.7 CGPA. Exchange program at IIT Gandhinagar',
      gradient: 'from-purple-400 to-pink-400',
      delay: 0.4
    },
    {
      icon: Award,
      title: 'Achievements',
      description: 'Dean\'s Honors List recipient for outstanding academic performance. Selected for IIT Gandhinagar exchange program',
      gradient: 'from-green-400 to-emerald-400',
      delay: 0.6
    }
  ];

  const skills = [
    { skill: 'Leadership & Team Collaboration', color: 'from-blue-400 to-cyan-400' },
    { skill: 'Project Management & Task Prioritization', color: 'from-purple-400 to-pink-400' },
    { skill: 'Strategic Planning & Decision-Making', color: 'from-green-400 to-emerald-400' },
    { skill: 'Strong Communication & Interpersonal Skills', color: 'from-orange-400 to-red-400' },
    { skill: 'Problem Solving & Analytical Thinking', color: 'from-blue-400 to-purple-400' },
    { skill: 'Adaptability & Attention to Detail', color: 'from-pink-400 to-purple-400' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-purple-300 mb-6"
            animate={{
              boxShadow: [
                "0 0 20px rgba(168, 85, 247, 0.3)",
                "0 0 40px rgba(168, 85, 247, 0.5)",
                "0 0 20px rgba(168, 85, 247, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Lightbulb className="w-4 h-4" />
            <span className="text-sm">Who I Am</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: card.delay }}
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 text-center h-full bg-slate-800/50 backdrop-blur-sm border-2 border-purple-500/20 hover:border-purple-500/40 transition-all group relative overflow-hidden">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                    />
                    
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-full flex items-center justify-center mx-auto mb-4 relative z-10`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl mb-3 text-white relative z-10">{card.title}</h3>
                    <p className="text-gray-300 relative z-10">
                      {card.description}
                    </p>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 bg-slate-800/50 backdrop-blur-sm border-2 border-purple-500/20">
            <h3 className="text-2xl mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Personal Skills
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {skills.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div 
                    className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full mt-2`}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                  <p className="text-gray-300">{item.skill}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

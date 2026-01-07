import { Code, Wrench, Languages, Brain, Zap } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';

export function Skills() {
  const technicalSkills = {
    'Programming Languages': ['C', 'Python', 'HTML', 'CSS', 'JavaScript', 'React', 'SQL', 'Node.js'],
    'Frameworks & Libraries': ['Pandas', 'NumPy', 'Scikit-learn'],
    'Core Concepts': ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Competitive Programming', 'Cybersecurity (Intermediate)', 'Agile Methodology'],
    'Tools & Platforms': ['Excel', 'PowerPoint', 'Git', 'Figma (UI/UX)', 'Kali Linux', 'Azure', 'Jira']
  };

  const languages = ['English', 'Hindi', 'French'];
  
  const interests = [
    'Web Development',
    'Artificial Intelligence',
    'Machine Learning',
    'Cybersecurity',
    'Project Management'
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
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
            <Zap className="w-4 h-4" />
            <span className="text-sm">What I Know</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-slate-800/50 backdrop-blur-sm border-2 border-purple-500/20 hover:border-purple-500/40 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Code className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-2xl text-white">Technical Skills</h3>
              </div>
              
              <div className="space-y-6">
                {Object.entries(technicalSkills).map(([category, skills], catIndex) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 }}
                  >
                    <h4 className="text-lg mb-3 text-purple-300">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge 
                            variant="secondary"
                            className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-400/30 hover:border-blue-400/60 transition-all"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Languages and Interests */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 bg-slate-800/50 backdrop-blur-sm border-2 border-purple-500/20 hover:border-green-500/40 transition-all h-full">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Languages className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl text-white">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {languages.map((lang, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Badge 
                        className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-400/30"
                      >
                        {lang}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 bg-slate-800/50 backdrop-blur-sm border-2 border-purple-500/20 hover:border-pink-500/40 transition-all h-full">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Brain className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl text-white">Interests</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                    >
                      <Badge 
                        className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-400/30"
                      >
                        {interest}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
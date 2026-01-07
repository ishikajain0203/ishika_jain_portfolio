import { Award, CheckCircle, Medal } from 'lucide-react';
import { Card } from './ui/card';
import { motion } from 'motion/react';

export function Certifications() {
  const certifications = [
    {
      title: 'Cybersecurity',
      provider: 'Google',
      icon: '🔒',
      color: 'blue'
    },
    {
      title: 'Artificial Intelligence (Essential AI)',
      provider: 'Google',
      icon: '🤖',
      color: 'purple'
    },
    {
      title: 'Linux Administration',
      provider: 'Red Hat',
      icon: '🐧',
      color: 'red'
    },
    {
      title: 'User Interface Design',
      provider: 'Professional Certification',
      icon: '🎨',
      color: 'green'
    }
  ];

  const achievements = [
    'Recognized on the JKLU Dean\'s Honors List for Outstanding Academic Performance during both the First and Second years',
    'Chosen for the Semester Exchange Program at IIT Gandhinagar (Semester 3rd)',
    'Enrolled in advanced courses: "Computer Networks and Security" and "Foundations of AI" at IIT Gandhinagar',
    'Website Coordinator - Increased user engagement by 30% and improved event accessibility'
  ];

  const getGradient = (color: string) => {
    const gradients: Record<string, string> = {
      blue: 'from-blue-400 to-cyan-400',
      purple: 'from-purple-400 to-pink-400',
      red: 'from-red-400 to-orange-400',
      green: 'from-green-400 to-emerald-400'
    };
    return gradients[color];
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 9,
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
            <Medal className="w-4 h-4" />
            <span className="text-sm">Milestones</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Certifications */}
          <div className="mb-12">
            <h3 className="text-2xl mb-6 text-center text-purple-300">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ y: -10, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className={`p-6 text-center bg-slate-800/50 backdrop-blur-sm border-2 border-purple-500/20 hover:border-purple-500/40 transition-all h-full relative overflow-hidden group`}>
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${getGradient(cert.color)} opacity-0 group-hover:opacity-10 transition-opacity`}
                      />
                      <div className="relative z-10">
                        <motion.div 
                          className="text-5xl mb-3"
                          animate={{
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3,
                          }}
                        >
                          {cert.icon}
                        </motion.div>
                        <h4 className="mb-2 text-white">{cert.title}</h4>
                        <p className="text-sm text-gray-400">{cert.provider}</p>
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl mb-6 text-center text-purple-300">Key Achievements</h3>
            <Card className="p-8 bg-slate-800/50 backdrop-blur-sm border-2 border-purple-500/20">
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Award className="w-6 h-6 text-white" />
                </motion.div>
                <h4 className="text-xl text-white">Honors & Recognition</h4>
              </div>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

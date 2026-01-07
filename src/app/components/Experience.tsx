import { Briefcase, Calendar, Trophy } from 'lucide-react';
import { Card } from './ui/card';
import { motion } from 'motion/react';

export function Experience() {
  const experiences = [
    {
      title: 'Teaching Assistant – Competitive Programming',
      organization: 'JK Lakshmipat University',
      period: 'Jan 2025 - May 2025 & Jan 2026 - Present',
      description: [
        'Organized coding contests and conducted post-contest up-solving sessions',
        'Guided students in problem-solving, algorithmic optimization, and coding best practices'
      ],
      color: 'blue'
    },
    {
      title: 'Project Manager Intern',
      organization: 'Sunday Tech',
      period: 'May 2025 – July 2025',
      description: [
        'Coordinated with cross-functional teams and prepared project documentation',
        'Assisted in sprint planning and client communication',
        'Gained exposure to Agile practices and task tracking while ensuring timely project delivery'
      ],
      color: 'purple'
    },
    {
      title: 'Internal Committee Member',
      organization: 'Robotics Club, JKLU',
      period: '2023 - Present',
      description: [
        'Contributed to drone and autonomous car projects using Arduino and sensors',
        'Developed a fully autonomous, voice-controlled and smartphone-controlled car'
      ],
      color: 'green'
    },
    {
      title: 'Student Council Member, PR Committee',
      organization: 'JKLU (Website Coordinator)',
      period: '2023',
      description: [
        'Managed and revamped the university website',
        'Increased user engagement by 30% and improved event accessibility'
      ],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { gradient: string }> = {
      blue: { gradient: 'from-blue-400 to-cyan-400' },
      purple: { gradient: 'from-purple-400 to-pink-400' },
      green: { gradient: 'from-green-400 to-emerald-400' },
      orange: { gradient: 'from-orange-400 to-red-400' }
    };
    return colors[color];
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
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
            <Briefcase className="w-4 h-4" />
            <span className="text-sm">Professional Journey</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => {
            const colors = getColorClasses(exp.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-2 border-purple-500/20 hover:border-purple-500/40 transition-all group relative overflow-hidden">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                    />

                    <div className="flex items-start gap-4 relative z-10">
                      <motion.div 
                        className={`w-12 h-12 bg-gradient-to-br ${colors.gradient} rounded-full flex items-center justify-center flex-shrink-0`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Briefcase className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl mb-1 text-white">{exp.title}</h3>
                        <p className={`bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent mb-2`}>
                          {exp.organization}
                        </p>
                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <ul className="space-y-2">
                          {exp.description.map((item, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start gap-2 text-gray-300"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <span className={`w-1.5 h-1.5 bg-gradient-to-r ${colors.gradient} rounded-full mt-2 flex-shrink-0`}></span>
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Hackathon Participation */}
        <motion.div
          className="max-w-4xl mx-auto mt-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-6 h-6 text-yellow-400" />
              <h3 className="text-xl text-white">Hackathon Participation</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              <motion.div
                className="px-4 py-2 bg-slate-700/50 rounded-full text-gray-300 border border-purple-500/20"
                whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.6)" }}
              >
                🏆 Odoo Hackathon 2024
              </motion.div>
              <motion.div
                className="px-4 py-2 bg-slate-700/50 rounded-full text-gray-300 border border-purple-500/20"
                whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.6)" }}
              >
                🏆 Smart India Hackathon (SIH) 2025
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
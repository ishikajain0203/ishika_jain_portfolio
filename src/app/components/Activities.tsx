import { Users, Heart, Star } from 'lucide-react';
import { Card } from './ui/card';
import { motion } from 'motion/react';

export function Activities() {
  const volunteerEvents = [
    'Sabrang 2023',
    'HackJKLU 2024',
    'Praudyogeek (Tech Fest)',
    'Aarambh 2024',
    'Ignite 2024'
  ];

  return (
    <section id="activities" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
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
            <Star className="w-4 h-4" />
            <span className="text-sm">Community Involvement</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Activities & Volunteering
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Volunteer Experience */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-slate-800/50 backdrop-blur-sm border-2 border-purple-500/20 hover:border-pink-500/40 transition-all relative overflow-hidden group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(236, 72, 153, 0.4)",
                        "0 0 30px rgba(168, 85, 247, 0.6)",
                        "0 0 20px rgba(236, 72, 153, 0.4)",
                      ],
                    }}
                  >
                    <Heart className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl text-white">Volunteer Experience</h3>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Actively contributed to various university events, demonstrating strong leadership, teamwork, 
                  communication, and organizational skills by coordinating logistics, managing participants, 
                  and supporting large-scale event execution.
                </p>

                <div className="flex flex-wrap gap-3">
                  {volunteerEvents.map((event, index) => (
                    <motion.div
                      key={index}
                      className="px-4 py-2 bg-slate-700/50 rounded-full text-gray-300 border border-purple-500/20 hover:border-purple-500/60 transition-all"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      {event}
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Leadership Roles */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 bg-slate-800/50 backdrop-blur-sm border-2 border-purple-500/20 hover:border-blue-500/40 transition-all relative overflow-hidden group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(59, 130, 246, 0.4)",
                        "0 0 30px rgba(34, 211, 238, 0.6)",
                        "0 0 20px rgba(59, 130, 246, 0.4)",
                      ],
                    }}
                  >
                    <Users className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl text-white">Leadership & Team Roles</h3>
                </div>

                <div className="space-y-4">
                  <motion.div
                    className="p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                  >
                    <h4 className="mb-2 text-white">Internal Committee Member - Robotics Club, JKLU</h4>
                    <p className="text-gray-300 text-sm">
                      Contributed to drone and autonomous car projects using Arduino and sensors. 
                      Developed a fully autonomous, voice-controlled and smartphone-controlled car.
                    </p>
                  </motion.div>

                  <motion.div
                    className="p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <h4 className="mb-2 text-white">Student Council Member - PR Committee (Website Coordinator)</h4>
                    <p className="text-gray-300 text-sm">
                      Managed and revamped the university website, increasing user engagement by 30% 
                      and improving event accessibility.
                    </p>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { BookOpen, Award, Sparkles } from 'lucide-react';
import { Card } from './ui/card';
import { motion } from 'motion/react';

export function Education() {
  const university = [
    { semester: 'Sem V', sgpa: '9.226', institute: 'JKLU Jaipur' },
    { semester: 'Sem IV', sgpa: '8.858', institute: 'JKLU Jaipur' },
    { semester: 'Sem III', sgpa: '8.25', institute: 'IIT Gandhinagar' },
    { semester: 'Sem II', sgpa: '8.85', institute: 'JKLU Jaipur' },
    { semester: 'Sem I', sgpa: '8.6', institute: 'JKLU Jaipur' },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
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
            <BookOpen className="w-4 h-4" />
            <span className="text-sm">Academic Journey</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* University Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 mb-8 bg-slate-800/50 backdrop-blur-sm border-2 border-purple-500/20 hover:border-purple-500/40 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <BookOpen className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl text-white">JK Lakshmipat University</h3>
                  <p className="text-gray-400">B.Tech in Computer Science Engineering | 2023-2027</p>
                  <motion.p 
                    className="text-lg bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                    animate={{
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    CGPA: 8.7
                  </motion.p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {university.map((sem, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-sm text-gray-400">{sem.institute}</p>
                    <p className="text-lg text-white">{sem.semester}</p>
                    <p className="text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      SGPA: {sem.sgpa}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <p className="text-sm text-purple-300">Special Achievement</p>
                </div>
                <p className="text-gray-300">
                  Selected for Semester Exchange Program at IIT Gandhinagar (Sem III), where I enrolled in 
                  "Computer Networks and Security" and "Foundations of AI"
                </p>
              </motion.div>
            </Card>
          </motion.div>

          {/* School Education */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-2 border-purple-500/20 hover:border-green-500/40 transition-all h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Sparkles className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl text-white">Class 12th</h3>
                      <p className="text-sm text-gray-400">2020-21</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-2">Central Academy Ser. Sec. School</p>
                  <p className="text-gray-400 mb-2">PCM Student</p>
                  <p className="text-3xl bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    86.5%
                  </p>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-2 border-purple-500/20 hover:border-pink-500/40 transition-all h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Sparkles className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl text-white">Class 10th</h3>
                      <p className="text-sm text-gray-400">2018-19</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-2">Central Academy Ser. Sec. School</p>
                  <p className="text-gray-400 mb-2">Bhilwara, Rajasthan</p>
                  <p className="text-3xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    94.5%
                  </p>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

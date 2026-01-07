import { Folder, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ProjectModal } from './ProjectModal';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: 'JKU Ride Sharing App',
      description: 'Developed a full-stack ride-sharing application that enables users to book and create rides, helping them find ride-sharing buddies for safe and budget-friendly travel. The app intelligently matches users with compatible ride partners based on route and timing preferences.',
      detailedDescription: 'This comprehensive ride-sharing platform features real-time matching algorithms, secure authentication, and an intuitive user interface designed to promote safe and cost-effective travel within the university community.',
      technologies: ['React.js', 'Node.js', 'PostgreSQL', 'RESTful APIs'],
      highlights: [
        'User authentication system',
        'Dynamic ride suggestions',
        'Route and timing matching algorithm',
        'Real-time notifications'
      ],
      color: 'blue'
    },
    {
      title: 'Speech Emotion Recognition System (SER)',
      description: 'Developed a machine learning-based system that detects human emotions by analyzing speech input. Applications include virtual assistants, call centers, and mental health monitoring.',
      detailedDescription: 'Utilizing advanced machine learning techniques and audio processing, this system achieves high accuracy in emotion detection across multiple emotional states.',
      technologies: ['Python', 'Librosa', 'Scikit-learn', 'TensorFlow', 'Matplotlib'],
      highlights: [
        'Audio feature extraction',
        'ML model building and training',
        'Real-time emotion detection',
        'Multi-emotion classification'
      ],
      color: 'purple'
    },
    {
      title: 'Flight Booking Optimization System',
      description: 'Designed an algorithm to efficiently suggest flight options based on user preferences such as preferred departure time and budget. Dynamically adjusted flight prices based on booking time, demand, and festival seasons.',
      detailedDescription: 'This optimization system uses advanced algorithmic approaches to provide the best flight options while considering multiple constraints and preferences.',
      technologies: ['C++', 'Greedy Algorithms', 'Dynamic Programming'],
      highlights: [
        'Preference-based matching',
        'Cost optimization',
        'Real-world scenario simulation',
        'Dynamic pricing algorithm'
      ],
      color: 'green'
    },
    {
      title: 'Secure ATM Application',
      description: 'Built an ATM application with a bank server using C++. Implemented multiple encryption techniques to ensure secure data, information, and transmission between the ATM and the bank.',
      detailedDescription: 'This project demonstrates advanced security concepts including encryption, secure communication protocols, and protected data storage.',
      technologies: ['C++', 'Encryption Algorithms', 'Network Security'],
      highlights: [
        'Multiple encryption techniques',
        'Secure data transmission',
        'Bank server integration',
        'Transaction authentication'
      ],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string, text: string, accent: string, gradient: string }> = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', accent: 'bg-blue-100', gradient: 'from-blue-400 to-cyan-400' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', accent: 'bg-purple-100', gradient: 'from-purple-400 to-pink-400' },
      green: { bg: 'bg-green-50', text: 'text-green-600', accent: 'bg-green-100', gradient: 'from-green-400 to-emerald-400' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', accent: 'bg-orange-100', gradient: 'from-orange-400 to-red-400' }
    };
    return colors[color];
  };

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
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
            <Folder className="w-4 h-4" />
            <span className="text-sm">My Work</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Exploring innovation through code - Click on any project to learn more
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleProjectClick(project)}
                  className="cursor-pointer"
                >
                  <Card className="p-6 h-full bg-slate-800/50 backdrop-blur-sm border-2 border-purple-500/20 hover:border-purple-500/40 transition-all group relative overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div 
                          className={`w-12 h-12 bg-gradient-to-br ${colors.gradient} rounded-lg flex items-center justify-center`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Folder className="w-6 h-6 text-white" />
                        </motion.div>
                        <h3 className="text-xl text-white flex-1">{project.title}</h3>
                        <motion.div
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ scale: 1.2 }}
                        >
                          <ExternalLink className="w-5 h-5 text-purple-400" />
                        </motion.div>
                      </div>

                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-sm text-purple-300 mb-2">Key Highlights:</h4>
                        <ul className="space-y-1">
                          {project.highlights.slice(0, 3).map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                              <span className={`w-1.5 h-1.5 bg-gradient-to-r ${colors.gradient} rounded-full mt-1.5 flex-shrink-0`}></span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <Badge 
                            key={idx} 
                            variant="secondary"
                            className="bg-slate-700/50 text-gray-300 text-xs border border-purple-500/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge className="bg-slate-700/50 text-purple-300 text-xs border border-purple-500/20">
                            +{project.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Click indicator */}
                    <motion.div
                      className="absolute bottom-4 right-4 text-purple-400 text-xs opacity-0 group-hover:opacity-100"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      Click to view details →
                    </motion.div>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
}
import { X, Github, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Badge } from './ui/badge';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    technologies: string[];
    highlights: string[];
    color: string;
    detailedDescription?: string;
  } | null;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null;

  const getColorClasses = (color: string) => {
    const colors: Record<string, { gradient: string }> = {
      blue: { gradient: 'from-blue-400 to-cyan-400' },
      purple: { gradient: 'from-purple-400 to-pink-400' },
      green: { gradient: 'from-green-400 to-emerald-400' },
      orange: { gradient: 'from-orange-400 to-red-400' }
    };
    return colors[color];
  };

  const colors = getColorClasses(project.color);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-purple-500/20"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${colors.gradient} p-6 relative`}>
                <motion.button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5 text-white" />
                </motion.button>

                <h2 className="text-3xl text-white pr-12">
                  {project.title}
                </h2>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="space-y-6">
                  {/* Description */}
                  <div>
                    <h3 className="text-lg text-purple-300 mb-2">Overview</h3>
                    <p className="text-gray-300">
                      {project.description}
                    </p>
                    {project.detailedDescription && (
                      <p className="text-gray-400 mt-3">
                        {project.detailedDescription}
                      </p>
                    )}
                  </div>

                  {/* Highlights */}
                  <div>
                    <h3 className="text-lg text-purple-300 mb-3">Key Features</h3>
                    <div className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3 p-3 bg-slate-700/50 rounded-lg"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${colors.gradient} rounded-full mt-2`} />
                          <p className="text-gray-300">{highlight}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg text-purple-300 mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <Badge className={`bg-gradient-to-r ${colors.gradient} text-white`}>
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <motion.button
                      className={`flex-1 py-3 px-6 bg-gradient-to-r ${colors.gradient} text-white rounded-lg flex items-center justify-center gap-2`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                      View on GitHub
                    </motion.button>
                    <motion.button
                      className="flex-1 py-3 px-6 border-2 border-purple-400 text-purple-300 rounded-lg flex items-center justify-center gap-2 hover:bg-purple-400/10"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

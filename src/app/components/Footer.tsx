import { Heart, Code } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white py-12 border-t border-purple-500/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            className="flex items-center justify-center gap-2 mb-4"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <p className="text-gray-400">Made with</p>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            >
              <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
            </motion.div>
            <p className="text-gray-400">and</p>
            <Code className="w-5 h-5 text-blue-400" />
          </motion.div>

          <p className="text-gray-400 mb-2">
            © 2026 Ishika Jain. All rights reserved.
          </p>
          <motion.p 
            className="text-sm bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          >
            Built with passion using React, Motion & Tailwind CSS
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}

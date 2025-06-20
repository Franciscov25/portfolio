import React from 'react';
import { FaLinkedin, FaYoutube, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contato = () => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center text-blue-400 min-h-[calc(100vh-64px)] p-4 relative z-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Sinta-se livre para conectar comigo!
      </motion.h2>

      <div className="flex gap-8 flex-wrap justify-center">
        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/franciscovargas7/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 transition-transform transform hover:scale-110"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <FaLinkedin size={48} />
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/Franciscov25"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-transform transform hover:scale-110"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <FaGithub size={48} />
        </motion.a>

        {/* Email */}
        <motion.a
          href="mailto:franciscovargasmarcal@gmail.com"
          className="text-red-400 hover:text-red-300 transition-transform transform hover:scale-110"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <FaEnvelope size={48} />
        </motion.a>

        {/* YouTube */}
        <motion.a
          href="https://www.youtube.com/@franciscov705"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:text-red-500 transition-transform transform hover:scale-110"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <FaYoutube size={48} />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Contato;

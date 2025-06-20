import React from 'react';
import { motion } from 'framer-motion';
import * as Tooltip from '@radix-ui/react-tooltip';
import {
  FaReact,
  FaPython,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaJsSquare,
  FaWind,
  FaBrain,
  FaBullseye,
  FaLightbulb,
  FaComments,
} from 'react-icons/fa';
import { SiPandas, SiArduino } from 'react-icons/si';
import avatar from '../assets/avatar.png';

const Sobre = () => {
  return (
    <section className="text-blue-500 min-h-[calc(100vh-64px)] py-12 px-4 relative z-10">
      <div className="mt-20 container mx-auto flex flex-col items-center">
        {/* Título */}
        <motion.h2
          className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sobre Mim
        </motion.h2>

        {/* Avatar + Descrição */}
        <motion.div
          className="flex flex-col md:flex-row items-center bg-zinc-800/90 rounded-xl p-8 shadow-lg max-w-4xl w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img
            src={avatar}
            alt="Francisco Vargas"
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-lg mb-6 md:mb-0 md:mr-8"
          />
          <p className="text-lg text-center md:text-left text-white">
            Olá! Me chamo <span className="text-blue-400 font-semibold">Francisco Vargas</span>, tenho 20 anos
            e sou estudante de Engenharia de Software na FIAP. Iniciei minha jornada aos 17 anos como Analista de Suporte N1 na Mutant (remoto),
            e desde então venho me apaixonando por tecnologia. Hoje participo da Iniciação Científica na FIAP com um projeto
            que usa IA para ajudar deficientes auditivos. Tenho foco em desenvolvimento <span className="text-blue-400">Full-Stack</span> com ênfase em
            <span className="text-blue-400"> Python</span> e <span className="text-blue-400">React</span>. Amo liderar, organizar e construir soluções criativas.
          </p>
        </motion.div>

        {/* Tecnologias */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-center text-blue-400 mb-6">Tecnologias que utilizo</h3>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: FaReact, label: 'React', color: 'text-cyan-400' },
              { icon: FaPython, label: 'Python', color: 'text-yellow-400' },
              { icon: SiPandas, label: 'Pandas', color: 'text-pink-400' },
              { icon: SiArduino, label: 'Arduino', color: 'text-green-400' },
              { icon: FaJsSquare, label: 'JavaScript', color: 'text-yellow-300' },
              { icon: FaWind, label: 'Tailwind CSS', color: 'text-sky-400' },
            ].map(({ icon: Icon, label, color }, idx) => (
              <Tooltip.Root key={idx}>
                <Tooltip.Trigger asChild>
                  <div className="flex flex-col items-center cursor-default">
                    <Icon className={`text-5xl ${color} hover:scale-110 transition-transform`} />
                    <span className="mt-2 text-sm text-white">{label}</span>
                  </div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    side="top"
                    className="bg-zinc-700 text-white px-3 py-1 rounded-md text-sm shadow-md"
                  >
                    {label}
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-center text-blue-400 mb-6">Soft Skills</h3>

          <div className="flex flex-wrap justify-center gap-10 text-white text-center">
            {[
              { icon: FaBrain, label: 'Capacidade Analítica' },
              { icon: FaBullseye, label: 'Foco' },
              { icon: FaLightbulb, label: 'Curiosidade' },
              { icon: FaComments, label: 'Comunicação' },
            ].map(({ icon: Icon, label }, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <Icon className="text-4xl text-blue-400 hover:scale-110 transition-transform mb-2" />
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sobre;

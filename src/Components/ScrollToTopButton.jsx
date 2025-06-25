import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpCircle } from 'lucide-react';
import * as Tooltip from '@radix-ui/react-tooltip';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-36 sm:bottom-36 md:bottom-40 right-4 sm:right-6 z-[9999]" 
        >
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  onClick={scrollToTop}
                  aria-label="Voltar ao topo"
                  className="bg-blue-600 hover:bg-transparent hover:text-blue-400 hover:cursor-pointer text-white p-3 rounded-full shadow-xl
                             backdrop-blur-md border border-blue-300 transition-transform duration-300
                             hover:scale-110 active:scale-95"
                >
                  <ArrowUpCircle className="w-7 h-7" />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="bg-zinc-800 text-white px-3 py-1 rounded-md text-sm shadow-md border border-blue-400"
                  sideOffset={6}
                >
                  Voltar ao topo
                  <Tooltip.Arrow className="fill-blue-400" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;

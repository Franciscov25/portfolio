import React, { useState, useEffect } from 'react';

const TypingText = ({ sentences, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000 }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);

  useEffect(() => {
    const currentSentence = sentences[loopIndex % sentences.length];

    let timeout;

    if (!isDeleting && text.length < currentSentence.length) {
      // Digitando
      timeout = setTimeout(() => {
        setText(currentSentence.substring(0, text.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && text.length === currentSentence.length) {
      // Espera antes de apagar
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && text.length > 0) {
      // Apagando
      timeout = setTimeout(() => {
        setText(currentSentence.substring(0, text.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && text.length === 0) {
      // Avança para próxima frase
      setIsDeleting(false);
      setLoopIndex((prev) => (prev + 1) % sentences.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, loopIndex, sentences, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <>
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 gap-8">
    {/* Texto */}
    <div className="text-center md:text-left">
        <h1 className="text-4xl font-semibold text-amber-500 mb-4">
        Olá, meu nome é Francisco Vargas!
        </h1>
        <div className="typing-container font-semibold text-amber-600">
        <span className="typing-text text-2xl">{text}</span>
        <span className="cursor">|</span>
        </div>
    </div>

    </div>

    </>
  );
};

export default TypingText;

// src/routes/Sobre.jsx (Exemplo)
import React from 'react';

const Sobre = () => {
  return (
    // Adicione 'relative z-10' aqui.
    <section className="text-white min-h-[calc(100vh-64px)] py-12 px-4 relative z-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Sobre Mim</h2>
        {/* Seu conteúdo de Sobre */}
      </div>
    </section>
  );
};

export default Sobre;
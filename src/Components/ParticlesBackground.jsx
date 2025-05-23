// src/Components/ParticlesBackground.jsx
import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  const particlesLoaded = (container) => {
    console.log("Particles container loaded", container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#0a0a0a", // Cor de fundo das partículas (bem escura)
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true, // Mantenha como true para o efeito de hover
              mode: "bubble", // Mantido como 'bubble' que é menos agressivo que 'repulse'
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            bubble: { // Ajuste para o modo 'bubble'
                distance: 200,
                size: 8,
                duration: 2,
                opacity: 0.8,
            },
            grab: { // Outra opção que pode testar
                distance: 150,
                links: {
                    opacity: 1
                }
            }
          },
        },
        particles: {
          color: {
            value: "#4CAF50", // Cor das partículas (verde esmeralda)
          },
          links: {
            color: "#60A5FA", // Cor das linhas (azul suave)
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Fica no fundo
      }}
    />
  );
};

export default ParticlesBackground;
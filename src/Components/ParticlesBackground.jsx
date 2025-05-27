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
            value: "#0a0a0a", // Cor de fundo das partículas (bem escura, para simular o espaço)
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true, // Desabilita a interação ao clique para um efeito de estrelas mais limpo
              mode: "push", // Manter caso queira habilitar e usar, mas por padrão desabilitado
            },
            onHover: {
              enable: true,
              mode: "repulse", // O modo "repulse" é o melhor para o efeito de proximidade do mouse
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4, // Ainda aqui caso onClick seja reativado
            },
            repulse: { // Configuração para o modo 'repulse'
              distance: 80, // Distância em que o mouse "afasta" as partículas
              duration: 0.4, // Duração da animação de repulsa
              speed: 0.5, // Velocidade com que as partículas se movem ao serem repelidas
              factor: 100, // Força do efeito de repulsa (maior valor = mais forte)
              maxSpeed: 50, // Velocidade máxima que as partículas podem atingir
            },
          },
        },
        particles: {
          color: {
            value: "#4cc9f0", // cor das estrelas
          },
          links: {
            enable: false, // Desabilita as linhas para um efeito de céu estrelado mais realista
          },
          collisions: {
            enable: true, // Manter colisões pode dar um movimento mais interessante
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true, // Movimento mais aleatório para simular o cintilar
            speed: 0.5, // Velocidade de movimento bem sutil
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 120, // Aumenta a quantidade para um céu mais denso
          },
          opacity: {
            value: 0.7, // Opacidade base
            random: true, // Varia a opacidade para um efeito de "cintilar"
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1, // Algumas estrelas podem ser quase invisíveis
              sync: false
            }
          },
          shape: {
            type: "star", // formato de estrela
          },
          size: {
            value: { min: 0.5, max: 2.5 }, // Tamanho das estrelas, bem pequenas e variadas
            random: true,
            animation: {
              enable: true,
              speed: 4,
              minimumValue: 0.5,
              sync: false
            }
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
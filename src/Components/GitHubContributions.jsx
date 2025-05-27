import React from 'react';
import GitHubCalendar from 'react-github-calendar';
// Importe os componentes de Tooltip da Radix UI
import * as Tooltip from '@radix-ui/react-tooltip';

const GitHubContributions = ({ username }) => {
  const theme = {
    dark: ['#2a2a2a', '#081c2c', '#01497c', '#018abe', '#00c9fa'], // Cores de contribuição
  };

  return (
    <div className="    /* Fundo escuro para o container */
      rounded-lg       /* Cantos arredondados */
      p-5              /* Preenchimento interno */
      mx-auto          /* Centraliza horizontalmente */
      my-10            /* Margem superior e inferior */
      max-w-4xl        /* Largura máxima: 600px */
      shadow-lg        /* Sombra */
      overflow-x-auto  /* Permite rolagem horizontal em telas pequenas */
      text-white       /* Cor do texto padrão para dentro do container */
    ">
      <h2 className="
        text-2xl        /* Tamanho da fonte */
        md:text-3xl     /* Tamanho da fonte em telas médias */
        font-bold       /* Negrito */
        mb-6            /* Margem inferior */
        text-center     /* Centraliza o texto */
        text-blue-400 /* Sua cor verde esmeralda para o título (ajustada para Tailwind) */
      ">
        Minhas Contribuições no GitHub
      </h2>

      {/* GitHubCalendar precisa de um provedor de tooltip da Radix */}
      <Tooltip.Provider>
        <GitHubCalendar
          username={username}
          theme={theme}
          blockSize={12}
          blockMargin={3}
          colorScheme="dark"
          showWeekdayLabels
          // Renderiza o bloco e o envolve no Tooltip da Radix
          renderBlock={(block, activity) => (
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                {/* O bloco em si, que será o gatilho para o tooltip */}
                {React.cloneElement(block, {
                  'data-tooltip-content': `${activity.count} contributions on ${activity.date}`, // Conteúdo para o tooltip
                })}
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content className="
                  bg-zinc-800       /* Fundo do tooltip */
                  text-white        /* Cor do texto do tooltip */
                  text-sm           /* Tamanho da fonte */
                  px-3              /* Preenchimento horizontal */
                  py-2              /* Preenchimento vertical */
                  rounded-md        /* Cantos arredondados */
                  shadow-md         /* Sombra para o tooltip */
                  data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade
                  data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade
                  data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade
                  data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade
                " sideOffset={5}>
                  <strong>{activity.count} contribuições</strong> em {activity.date}
                  <Tooltip.Arrow className="fill-zinc-800" /> {/* Seta do tooltip */}
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          )}
        />
      </Tooltip.Provider>
    </div>
  );
};

export default GitHubContributions;
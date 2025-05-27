import React from 'react';

const SimpleSpotifyEmbed = () => {
  // Substitua este iframe pelo código que você copiou do Spotify
  const spotifyEmbedCode = `
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2ZRo7axmMPeSVUvDbGkJah?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  `;

  return (
    <div className="bg-zinc-800 rounded-lg p-5 mx-auto my-10 max-w-2xl shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-400">
        Minha Playlist Favorita
      </h2>
      {/* dangerouslySetInnerHTML é necessário para renderizar HTML puro em React */}
      <div dangerouslySetInnerHTML={{ __html: spotifyEmbedCode }} />
      <p className="text-sm text-gray-400 mt-4 text-center">
        Curta a playlist diretamente do Spotify!
      </p>
    </div>
  );
};

export default SimpleSpotifyEmbed;
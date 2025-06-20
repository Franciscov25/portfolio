import React from 'react';

const SimpleSpotifyEmbed = () => {
  return (
    <div className='p-7'>
      <div className="border-2 border-blue-400 bg-gradient-to-br from-zinc-900 to-blue-950 bg-zinc-800 rounded-lg p-5 mx-auto my-10 max-w-2xl shadow-lg text-white relative z-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-400">
          Minha Música Favorita
        </h2>

        <iframe
          className="rounded-xl w-full h-[352px] z-10 relative"
          src="https://open.spotify.com/embed/track/1BncfTJAWxrsxyT9culBrj?utm_source=generator&theme=0"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>

        <p className="text-sm text-blue-300 mt-4 text-center">
          Curta a playlist diretamente do Spotify!
        </p>
      </div>
    </div>
  );
};

export default SimpleSpotifyEmbed;

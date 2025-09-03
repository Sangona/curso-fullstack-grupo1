import React from 'react';

function VideoPlayer(props) {
  const isYouTubeUrl = props.src && props.src.includes('youtube.com');

  if (isYouTubeUrl) {
    // Extraer el ID del video de YouTube para el iframe
    const videoIdMatch = props.src.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
    const videoId = videoIdMatch ? videoIdMatch[1] : null;
    const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;

    return (
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <h2>{props.title || 'Video de YouTube'}</h2>
        {embedUrl ? (
          <iframe
            width="80%"
            height="360"
            src={embedUrl}
            title={props.title}
            style={{ border: 'none' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p>URL de YouTube inválida</p>
        )}
        {props.description && <p>{props.description}</p>}
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>{props.title || 'Video'}</h2>
      <video
        src={props.src}
        controls
        style={{ width: '80%', maxWidth: '600px' }}
        title={props.title}
      >
        Tu navegador no soporta el elemento de video.
      </video>
      {props.description && <p>{props.description}</p>}
    </div>
  );
}

export default VideoPlayer;

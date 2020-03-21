import React from 'react';
import './Video.scss';

export default function Video(props) {
  const { id, snippet: { title, thumbnails } } = props.info;

  const goVideoOnYoutube = () => {
    window.open(`https://www.youtube.com/watch?v=${id.videoId}`);
  }

  if (!props) return null;
  return (
    <div className="video" onClick={goVideoOnYoutube}>
      <img src={thumbnails.medium.url} alt="video-img" />
      <div className="video-title">{title}</div>
    </div>
  );
}
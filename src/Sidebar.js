import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    // Add logic to play audio
  };

  const handlePause = () => {
    setIsPlaying(false);
    // Add logic to pause audio
  };

  const handleStop = () => {
    setIsPlaying(false);
    // Add logic to stop audio
  };

  return (
    <div className="sidebar">
      <h2>Sidebar Player</h2>
      <div className="player-controls">
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleStop}>Stop</button>
      </div>
      {isPlaying ? <p>Playing...</p> : <p>Paused</p>}
      <div className="playlist">
        <h3>Playlist</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

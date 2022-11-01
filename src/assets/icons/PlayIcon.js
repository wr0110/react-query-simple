import React from 'react';

const PlayIcon = () => {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M60 114.546c30.125 0 54.546-24.421 54.546-54.546S90.125 5.455 60 5.455 5.455 29.875 5.455 60 29.875 114.546 60 114.546Z"
        fill="#000"
        fillOpacity="0%"
      ></path>
      <path d="M60 5.455a54.546 54.546 0 0 1 47.236 27.272" stroke="url(#player-button-s)" strokeWidth="5.986"></path>
      <path d="M107.236 32.727a54.54 54.54 0 0 1 0 54.546" stroke="url(#player-button-b)" strokeWidth="5.986"></path>
      <path
        d="M107.236 87.273A54.548 54.548 0 0 1 60 114.546"
        stroke="url(#player-button-c)"
        strokeWidth="5.986"
      ></path>
      <path d="M60 114.546a54.55 54.55 0 0 1-47.236-27.273" stroke="url(#player-button-d)" strokeWidth="5.986"></path>
      <path d="M12.764 87.273a54.545 54.545 0 0 1 0-54.545" stroke="url(#player-button-e)" strokeWidth="5.986"></path>
      <path d="M12.764 32.727A54.546 54.546 0 0 1 60 5.455" stroke="url(#player-button-f)" strokeWidth="5.986"></path>
      <path
        d="M50.387 85.167c-3.142 0-5.387-2.47-5.387-5.387V40.275C45 37.469 47.245 35 50.387 35c.898 0 1.908.224 2.806.786l32.322 19.752c1.571.898 2.581 2.694 2.581 4.49 0 1.907-1.01 3.703-2.581 4.6L53.193 84.382a5.33 5.33 0 0 1-2.806.786Z"
        fill="#fff"
      ></path>
      <defs>
        <linearGradient id="player-button-s" x1="60" y1="5.455" x2="83.619" y2="46.363" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffffff"></stop>
          <stop offset="0.5" stopColor="#ffffff"></stop>
        </linearGradient>
        <linearGradient
          id="player-button-b"
          x1="107.236"
          y1="32.727"
          x2="107.236"
          y2="87.273"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffffff"></stop>
          <stop offset="0.7" stopColor="#ffffff"></stop>
        </linearGradient>
        <linearGradient
          id="player-button-c"
          x1="107.236"
          y1="87.273"
          x2="83.617"
          y2="128.181"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffffff"></stop>
          <stop offset="1" stopColor="#ffffff"></stop>
        </linearGradient>
        <linearGradient
          id="player-button-d"
          x1="60"
          y1="114.546"
          x2="36.381"
          y2="73.637"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.2" stopColor="#ffffff"></stop>
          <stop offset="1" stopColor="#ffffff"></stop>
        </linearGradient>
        <linearGradient
          id="player-button-e"
          x1="5.456"
          y1="87.273"
          x2="5.456"
          y2="32.727"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.1" stopColor="#ffffff"></stop>
          <stop offset="1" stopColor="#ffffff"></stop>
        </linearGradient>
        <linearGradient
          id="player-button-f"
          x1="12.764"
          y1="32.727"
          x2="36.383"
          y2="-8.181"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffffff"></stop>
          <stop offset="1" stopColor="#ffffff"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default PlayIcon;

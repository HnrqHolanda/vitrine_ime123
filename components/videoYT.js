import React from 'react';
import YouTube from 'react-youtube';
import styles from "../styles/components/videoYT.module.css"
const YoutubePlayer = ({ videoId }) => {
  const opts = {
    height: '240',
    width: '520',
    playerVars: {
      autoplay: 0, // 1 para autoplay
    },
  };

  return( <YouTube videoId={videoId} opts={opts} className={styles.video}/>)
};

export default YoutubePlayer;
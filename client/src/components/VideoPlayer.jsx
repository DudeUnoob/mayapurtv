import videojs from "video.js";
import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from "react-player"
import "../css/VideoPlayer.css"
import Home from "../pages/Home";
import Clappr from  "@clappr/player"



export default function VideoPlayer(props) {
  console.log(props.sources[0].src)

    const videoNode = useRef(null);
    const [player, setPlayer] = useState(null);
    useEffect(() => {
      if (videoNode.current) {
        const _player = videojs(videoNode.current, props);
        setPlayer(_player);
        return () => {
          if (player !== null) {
            player.dispose();
          }
        };
      }
    }, []);

    useEffect(() => {
      console.log(props)
    }, [props]);
  
    return (
        <>
      <div data-vjs-player>
        <video ref={videoNode} className="video-js" ></video>
      </div>
      <div id="player3">

      </div>
      </>
    );
  };
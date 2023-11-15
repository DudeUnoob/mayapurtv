import videojs from "video.js";
import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from "react-player"
import "../css/VideoPlayer.css"
import Home from "../pages/Home";


export default function VideoPlayer(props) {
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
      
      if(player != null) {
        player.dispose()
        const _player = videojs(videoNode.current, props)
        setPlayer(_player)
      }

      
    }, [props.sources]);

    return (
        <>
      <div data-vjs-player >
        <video ref={videoNode} className="video-js" ></video>
      </div>
      </>
    );
  };

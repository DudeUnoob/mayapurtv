import videojs from "video.js";
import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from "react-player"
import "../css/VideoPlayer.css"
import Home from "../pages/Home";
import Clappr from  "@clappr/player"
import { useStreamContext, useStreamUpdateContext } from "../context/StreamContext";



export default function VideoPlayer(props) {
  const getStreamName = useStreamContext();
  console.log(getStreamName, props.sources[0].src)
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
     const originalString = props.sources[0].src
     const withoutPrefix = originalString.replace("https://video5.mayapur.tv/", "")

     const withoutSuffix = withoutPrefix.replace("/chunklist.m3u8", "")
      
     if(getStreamName.stream == withoutSuffix){
      return
     } else {
      window.location.reload()
     }
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
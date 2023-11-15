import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import videojs from 'video.js';
import { useStreamContext, useStreamUpdateContext } from '../context/StreamContext';
import { allChannels } from '../context/ChannelList';
import 'video.js/dist/video-js.css';
import videoConfig from '../functions/videoConfig';
import VideoPlayer from '../components/VideoPlayer';
import Channels from '../components/Channels';
import Home from './Home';

export default function StreamPage() {
  const getStreamName = useStreamContext();
  const { streamName } = useParams();
  const navigate = useNavigate();
  const updateStreamName = useStreamUpdateContext();
  const [streamUrl, setStreamUrl] = useState('');

  useEffect(() => {
    let findChannel = allChannels.find((object) => object.name === streamName);

    if (findChannel !== undefined || findChannel !== null) {
      updateStreamName.streamSet(findChannel);
    }

    async function callVideoConfig() {
      const streamConfig = await videoConfig(findChannel.stream);
      setStreamUrl(streamConfig);
    }

    callVideoConfig();
  }, [getStreamName]);

  if (!streamUrl) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="heading" >
        <VideoPlayer {...streamUrl} />
        <Home />
      </div>
    </>
  );
}

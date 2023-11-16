import React, { useState, useEffect } from 'react';
import apiRequest from '../functions/api';
import { Spinner } from 'react-bootstrap';
import Channels from '../components/Channels';
import { Link } from 'react-router-dom';

function Home() {
  const [channelData, setChannelData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
        const response = await apiRequest()
        setChannelData(response.data.allChannels)
        setIsLoading(false)
    }

    setInterval(async() => {
      const response = await apiRequest()
      setChannelData(response.data.allChannels)
    }, 5000)

    fetchData()
  }, []);

  return (
    <>
     {isLoading ? (
        <Spinner animation='border' role='status'/>
     ) : (
      <>
        <Channels channels={channelData}/>
        <div className="footer" style={{ textAlign:"center"}}>
      <Link to={"https://github.com/dudeunoob"} style={{ fontSize:"25px"}} target='_blank'><b>Made by me</b></Link>
     </div>
      </>
     )}
     
    </>
  );
}

export default Home;

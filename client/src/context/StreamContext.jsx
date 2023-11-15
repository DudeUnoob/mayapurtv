import React, { useState, useEffect, useContext } from 'react';

export const StreamContext = React.createContext()
export const StreamUpdateContext = React.createContext()


export function useStreamContext(){
    return useContext(StreamContext)
}

export function useStreamUpdateContext(){
    return useContext(StreamUpdateContext)

}

export function StreamProvider({ children }) {
    
    // State for our stream data
  const [streamData, setStreamData] = useState([])

  async function streamSet(streamName) {
    setStreamData(streamName)
  }

  return (
    <StreamContext.Provider value={streamData}>
        <StreamUpdateContext.Provider value={{ streamSet }}>
        {children}
      </StreamUpdateContext.Provider>
    </StreamContext.Provider>
  )
}


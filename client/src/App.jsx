import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar'
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import StreamPage from './pages/StreamPage'
import { StreamProvider } from './context/StreamContext'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavigationBar />
      <BrowserRouter>
      <StreamProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stream/:streamName' element={<StreamPage />}/>
        </Routes>
        </StreamProvider>
      </BrowserRouter>
    </>
  )
}

export default App

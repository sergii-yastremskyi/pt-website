import './App.css';
import Header from './Structure/Header';

import css from './mainApp.module.css';
import PhotoBooth from './Structure/Pages/Photobooth/PhotoBooth';
import { Route, Routes } from 'react-router-dom';
import Home from './Structure/Pages/Home';
import Chromakey from './Structure/Pages/Chromakey';
import SelfieMirror from './Structure/Pages/SelfieMirror';
import WifiPrint from './Structure/Pages/WifiPrint';
import GifBooth from './Structure/Pages/GifBooth';
import InstantPrint from './Structure/Pages/InstantPrint';
import HighSelfie from './Structure/Pages/HighSelfie';
import Development from './Structure/Pages/Development';
import Footer from './Structure/Footer/';


function App() {
  return (
    <div className={css.app}>
      <Header />
      <div className={css.content}></div>
      <div className="callback-form"></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Development />} />
        <Route path="/photo-booth" element={<PhotoBooth />} />
        <Route path="/chromakey" element={<Development />} />
        <Route path="/selfie-mirror" element={<Development />} />
        <Route path="/wifi-print" element={<Development />} />
        <Route path="/gif-booth" element={<Development />} />
        <Route path="/instant-print" element={<Development />} />
        <Route path="/high-selfie" element={<Development />} />
      </Routes>
    
      <Footer/>
    </div>
  );
}

export default App;

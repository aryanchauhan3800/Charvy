import { useState } from 'react';
import './App.css';
import Spline from '@splinetool/react-spline';

function App() {
  const [count, setCount] = useState(0);

  const handleAudioPlay = (audio) => {
    console.log("Playing audio:", audio);
  };

  const p3 = "path_to_audio_file_or_audio_data";

  return (


    <div className="w-screen h-screen">
    

<div className="w-screen h-screen">
<Spline scene="https://prod.spline.design/74ZAuEgpAulhvcer/scene.splinecode" /> </div>
    </div>

    
    



  );
}

export default App;

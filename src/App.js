
import './App.css';


import { useState } from 'react';

import SpeakButton from './components/speakButton.jsx'
import TextArea from './components/textArea.jsx';




function App() {

  const [sentence, setSentence] = useState('');
  

  return (
    <div className="App">
      <div className='container'>
        <TextArea setSentence={setSentence}/>
        <SpeakButton sentence={sentence}/>
        
      </div>
      
      <footer>Erik Wasmosy @ erwaen</footer>
      
    </div>
  );
}

export default App;

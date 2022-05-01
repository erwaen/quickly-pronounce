import logo from './logo.svg';
import './App.css';


import { useState } from 'react';

import SpeakButton from './components/speakButton.jsx'
import TextArea from './components/textArea.jsx';



function App() {

  const [sentence, setSentence] = useState('');


  return (
    <div className="App">
      <TextArea setSentence={setSentence}/>
      <h1>
        {sentence}
      </h1>
      <SpeakButton sentence={sentence}/>
    </div>
  );
}

export default App;

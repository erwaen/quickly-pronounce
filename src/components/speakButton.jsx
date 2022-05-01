import React from "react";
import { useCallback, useEffect } from "react";
import { useSpeechSynthesis } from 'react-speech-kit';
import './speakButton.css'

const SpeakButton = (props) => {

    const {speak} = useSpeechSynthesis();

    

    const handleKeyPress = useCallback((event) => {
        if (event.ctrlKey  && event.keyCode === 13){
           
            document.getElementById("pronounce").click()
          
        }
        
    }, []);
    
    useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress);

    // remove the event listener
    return () => {
        document.removeEventListener('keydown', handleKeyPress);
    };
    }, [handleKeyPress]);
    return (
        <div className="main-container">
            <button 
            id="pronounce"
            onClick={() => speak({text: props.sentence})}>
                Pronounce!    
            </button>
            <div className="shortcut">
                <span>Ctrl</span>
                <span>+</span>
                <span>Enter</span>
            </div>
        </div>
    );
};


export default SpeakButton;
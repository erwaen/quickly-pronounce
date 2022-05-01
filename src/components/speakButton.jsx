import React from "react";
import { useSpeechSynthesis } from 'react-speech-kit';


const SpeakButton = (props) => {

    const {speak} = useSpeechSynthesis();

    return (
        <div>
            <button onClick={() => speak({text: props.sentence})}>
                Speak    
            </button>
        </div>
    );
};

export default SpeakButton;
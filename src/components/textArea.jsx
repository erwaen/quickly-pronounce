import React from "react";
import { useCallback, useEffect } from "react";

import './textArea.css';

import TextareaAutosize from '@mui/base/TextareaAutosize';


const TextArea = (props) => {

    const handleKeyPress = useCallback((event) => {
        if (event.ctrlKey  && event.keyCode === 77){
            console.log("m");
            document.getElementById("inputText").focus();
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
        <div className="main-box">
            <TextareaAutosize
                id="inputText" 
                placeholder="Write something..."
                onChange={e => props.setSentence(e.target.value)}
            />
            <div className="shortcutM">
                <span>Ctrl</span>
                <span>+</span>
                <span>M</span>
            </div>
        </div>
    );
};

export default TextArea;
import React from "react";
import './textArea.css';

const TextArea = (props) => {
    return (
        <div>
            <textarea 
                placeholder="Write something..."
                onChange={e => props.setSentence(e.target.value)}
            />
        </div>
    );
};

export default TextArea;
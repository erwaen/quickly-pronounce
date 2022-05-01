import React from "react";


const TextArea = (props) => {
    return (
        <div>
            <textarea onChange={e => props.setSentence(e.target.value)}/>
        </div>
    );
};

export default TextArea;
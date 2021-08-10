import React from "react";

function Note(props) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={() => props.onDelete(props.id)}>DELETE</button>
            {/* could use named function ( say, handleClick() ) instead of arrow function here*/}
        </div>
    );
}

export default Note;

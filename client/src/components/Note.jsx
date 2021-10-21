import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={() => props.onDelete(props.id)}><DeleteIcon /></button>
            {/* could use named function ( say, handleClick() ) instead of arrow function here*/}
        </div>
    );
}

export default Note;

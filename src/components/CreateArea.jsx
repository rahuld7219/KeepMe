import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab'; // floating action button for adding note
import Zoom from '@material-ui/core/Zoom'; //for zoom-in transition of floating action button 

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const [isExpanded, setIsExpanded] = useState(false)

    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevState => {
            return { ...prevState, [name]: value };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    function expand() {
        setIsExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && <input name="title" onChange={handleChange} placeholder="Title" value={note.title} />}
                <textarea
                    name="content"
                    onClick={expand}
                    onChange={handleChange}
                    placeholder="Take a note..."
                    rows={isExpanded ? "3" : "1"}
                    value={note.content}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
                {/* could use arrow function instead of named function and could use onSubmit event on form instead of onClick here*/}
            </form>
        </div>
    );
}

export default CreateArea;
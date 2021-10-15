import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
    const emptyNote = { title: "", content: "" }
    const [note, setNote] = useState(emptyNote)
    const [isExpanded, setExpanded] = useState(false)
    const handleChange = event => {
        const {name, value} = event.target
        setNote(note => ({...note, [name]: value}))
    }
    return (
        <div>
        <form className="create-note" >
            <input 
                name="title" 
                onChange={handleChange} 
                placeholder="Title" 
                value={note.title} 
                style={{ display: isExpanded ? "" : "none" }} 
            />
            <textarea 
                name="content" 
                onChange={handleChange} 
                placeholder="Take a note..." 
                rows={ isExpanded ? 3 : 1 } 
                value={note.content} 
                onFocus={() => setExpanded(true)}
            />
            <Zoom in={isExpanded}>
                <Fab onClick={event => {
                    event.preventDefault()
                    props.onSubmit(note)
                    setNote(emptyNote)
                }}>
                    <AddIcon />
                </Fab>
            </Zoom>
        </form>
        </div>
    );
}

export default CreateArea;

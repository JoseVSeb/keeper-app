import React, { useState } from "react";

function CreateArea(props) {
    const emptyNote = { title: "", content: "" }
    const [note, setNote] = useState(emptyNote)
    const handleChange = event => {
        const {name, value} = event.target
        setNote(note => ({...note, [name]: value}))
    }
    return (
        <div>
        <form onSubmit={event => {
            event.preventDefault()
            props.onSubmit(note)
            setNote(emptyNote)
        }}>
            <input name="title" onChange={handleChange} placeholder="Title" value={note.title} />
            <textarea name="content" onChange={handleChange} placeholder="Take a note..." rows="3" value={note.content} />
            <button>Add</button>
        </form>
        </div>
    );
}

export default CreateArea;

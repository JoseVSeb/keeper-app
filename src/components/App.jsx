import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([])
    return (
        <div>
            <Header />
            <CreateArea onSubmit={note => setNotes([...notes, note])} />
            {notes.map((note, index) => <Note
                key={index}
                id={index}
                {...note}
                onDelete={(id) => {
                    setNotes(notes => notes.filter((_note, index) => index !== id))
                }}
            />)}
            <Footer />
        </div>
    );
}

export default App;

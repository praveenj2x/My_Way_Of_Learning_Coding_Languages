"use client";
import Editor from "@/components/editor";
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import { Note } from "@/lib/types";
import { useState } from "react";

export default function note() {
    const [notes, setNotes] = useState<Note[]>([]);
    const [activeNote, setActiveNote] = useState<Note | null>(null);
    const [isEditing, setIsEditing] = useState<boolean>(false);

const createNewNote = () => {
    const newNote: Note = {
        id: Date.now().toString(),
        title: "Untitled Note",
        content: "",
        createdAt: Date.now(),
        updatedAt: Date.now(),
    };
    setNotes([newNote, ...notes]);
    setIsEditing(true);
};

const selectNote = (note: Note) => {
    setActiveNote(note);
}

const renderNoteContent = () => {
if (activeNote && isEditing) {
    return (
        <Editor />
    )
}    
}

  return (
    <div className="flex flex-col min-h-screen">
        <Header onNewNote={createNewNote}/>
        <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
                <Sidebar notes={notes} onSelectNote={selectNote}/>
            </div>
            <div className="md:col-span-2">
                {renderNoteContent()}
            </div>
        </main>
    </div>
  )
}
 
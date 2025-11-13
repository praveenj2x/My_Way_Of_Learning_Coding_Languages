"use client";
import Editor from "@/components/editor";
import Header from "@/components/header";
import NoteViewer from "@/components/noteView";
import Sidebar from "@/components/sidebar";
import { loadNotes, saveNotes } from "@/lib/storage";
import { Note } from "@/lib/types";
import { useEffect, useState } from "react";

export default function note() {
  const [notes, setNotes] = useState<Note[]>(() => loadNotes());
  const [activeNote, setActiveNote] = useState<Note | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const createNewNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: "Untitled Note",
      content: "",
      createdAt: Date.now(),
    };
    setNotes([newNote, ...notes]);
    setActiveNote(newNote);
    setIsEditing(true);
  };

  const selectNote = (note: Note) => {
    setActiveNote(note);
    setIsEditing(false);
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
    if (activeNote?.id === id) {
      setActiveNote(null);
      setIsEditing(false);
    }
  };

  const cancelEdit = () => {
    setIsEditing(false);
  };

  const saveNote = (updatedNote: Note) => {
    setNotes(
      notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
    setActiveNote(updatedNote);
    setIsEditing(false);
  };

  const renderNoteContent = () => {
    if (!activeNote && notes.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <p>No notes available. Create a new note to get started.</p>
        </div>
      );
    }

    if (activeNote && isEditing) {
      return (
        <Editor note={activeNote} onCancel={cancelEdit} onSave={saveNote} />
      );
    }

    if (activeNote) {
      return <NoteViewer note={activeNote} onEdit={() => setIsEditing(true)} />;
    }
    return null;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onNewNote={createNewNote} />
      <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
        <div className="md:col-span-1">
          <Sidebar
            createNewNote={createNewNote}
            notes={notes}
            onSelectNote={selectNote}
            onDeleteNote={deleteNote}
            activeNoteId={activeNote?.id}
          />
        </div>
        <div className="md:col-span-2">{renderNoteContent()}</div>
      </main>
    </div>
  );
}

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EmptyState from "./empty-state";
import { Note } from "@/lib/types";
import { Button } from "./ui/button";
import { formatDate } from "@/lib/storage";
import { Trash2 } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

interface SidebarProps {
  notes: Note[];
  onSelectNote?: (note: Note) => void;
  createNewNote?: () => void;
  onDeleteNote: (id: string) => void;
  activeNoteId?: string;
}

export default function Sidebar({
  notes,
  onSelectNote,
  createNewNote,
  onDeleteNote,
  activeNoteId,
}: SidebarProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>My Notes</CardTitle>
      </CardHeader>
      <CardContent>
        {notes.length === 0 ? (
          <EmptyState
            message="No Notes Found"
            buttonText="Create Note"
            onButtonClick={createNewNote}
          />
        ) : (
          <ScrollArea className="h-[calc(105vh-250px)]">
            <div>
              {notes.map((note) => (
                <div
                  className={`p-3 rounded-md cursor-pointer hover:bg-accent transition-colors ${activeNoteId === note.id ? "bg-accent" : ""}`}
                  key={note.id}
                  onClick={() => onSelectNote?.(note)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">
                        {note.title.substring(0, 20)}
                        {note.title.length > 20 && "..."}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {note.content.substring(0, 30)}
                        {note.content.length > 30 && "..."}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(note.createdAt)}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteNote(note.id);
                      }}
                      className="h-8 w-8 text-muted-foreground hover:text-destructive cursor-pointer"
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
}

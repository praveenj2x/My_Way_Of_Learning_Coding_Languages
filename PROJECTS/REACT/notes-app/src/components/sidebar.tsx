"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EmptyState from "./empty-state";
import { Note } from "@/lib/types";
import { Button } from "./ui/button";
import { formatDate } from "@/lib/storage";
import { Trash2 } from "lucide-react";

interface SidebarProps {
  notes: Note[];
  onSelectNote?: (note: Note) => void;
}

export default function Sidebar({ notes, onSelectNote }: SidebarProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Notes</CardTitle>
      </CardHeader>
      <CardContent>
        {notes.length === 0 ? (
          <EmptyState
            message=""
            buttonText="Create Note"
            onButtonClick={() => console.log("Button clicked")}
          />
        ) : (
          <div>
            {notes.map((note) => (
              <div
                className="p-3 rounded-md cursor-pointer hover:bg-accent transition-colors"
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
                  className="h-8 w-8 text-muted-foreground hover:text-destructive cursor-pointer"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

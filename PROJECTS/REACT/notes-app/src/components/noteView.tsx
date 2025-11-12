import { Note } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { format } from "path";
import { formatDate } from "@/lib/storage";

interface NoteViewerProps {
  note: Note;
}

export default function NoteViewer({ note }: NoteViewerProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
        <p className="text-sm text-muted-foreground">
            {formatDate(note.updatedAt)}
        </p>
      </CardHeader>
      <CardContent>{note.content}</CardContent>
    </Card>
  );
}

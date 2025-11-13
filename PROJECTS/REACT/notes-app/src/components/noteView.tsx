import { Note } from "@/lib/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { format } from "path";
import { formatDate } from "@/lib/storage";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

interface NoteViewerProps {
  note: Note;
  onEdit: () => void;
}

export default function NoteViewer({ note, onEdit }: NoteViewerProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
        <p className="text-sm text-muted-foreground">
          {formatDate(note.updatedAt)}
        </p>
      </CardHeader>
      <ScrollArea className="h-[calc(108vh-350px)]">
        <CardContent>{note.content}</CardContent>
      </ScrollArea>
      <CardFooter className="flex justify-end">
        <Button onClick={onEdit}>Edit Note</Button>
      </CardFooter>
    </Card>
  );
}

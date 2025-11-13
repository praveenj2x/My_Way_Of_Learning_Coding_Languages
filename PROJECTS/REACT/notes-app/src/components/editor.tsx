import { Note } from "@/lib/types";
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Save, X } from "lucide-react";

interface EditorProps {
  note: Note;
  onSave: (note: Note) => void;
  onCancel: () => void;
}

export default function Editor({ note, onCancel, onSave }: EditorProps) {
  const [title, setTitle] = useState<string>(note.title);
  const [content, setContent] = useState<string>(note.content);
  const handleSave = () => {
  onSave({
    ...note,
    title: title.trim() || "Untitled Note",
    content,
  });
};

return (
    <Card>
      <CardHeader>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-xl font-bold border-none px-0 focus-visible:ring-0"
        />
      </CardHeader>
      <CardContent>
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-[400px] resize-none border-none focus-visible:ring-0"
        />
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" onClick={onCancel}>
          <X className="mr-2" />
          Cancel
        </Button>
        <Button variant="default" onClick={handleSave}>
          <Save className="mr-2" />
          Save
        </Button>
      </CardFooter>
    </Card>
  );
}

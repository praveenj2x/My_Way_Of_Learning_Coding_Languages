import React from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

interface HeaderProps {
  onNewNote?: () => void;
}

const Header = ({ onNewNote }: HeaderProps) => {
  return (
    <header className="border-b p-4 bg-card">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Browse Notes</h1>
        <Button className="cursor-pointer" size="sm" onClick={onNewNote}>
          <Plus className="mr-2 h-4 w-4" />
          New Note
        </Button>
      </div>
    </header>
  );
};

export default Header;

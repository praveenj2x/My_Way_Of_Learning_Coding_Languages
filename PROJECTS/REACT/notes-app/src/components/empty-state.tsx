"use client";

import { Plus } from "lucide-react";
import { Button } from "./ui/button";

interface EmptyStateProps {
  message?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const EmptyState = ({
  message,
  buttonText,
  onButtonClick,
}: EmptyStateProps) => {
  return (
    <div className="flex items-center justify-center mb-4">
      <div className="text-center p-8">
        <p className="text-muted-foreground mb-4">No notes found. {message}</p>
          <Button onClick={onButtonClick} className="ml-4">
            <Plus className="mr-2 h-4 w-4" />
            {buttonText}
          </Button>
      </div>
    </div>
  );
};

export default EmptyState;

"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Id } from "../../convex/_generated/dataModel";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface RenameDialogProps {
  documentId: Id<"documents">;
  initialTitle: string;
  children: React.ReactNode;
}

export const RenameDialog = ({
  documentId,
  initialTitle,
  children,
}: RenameDialogProps) => {
  const update = useMutation(api.documents.updateById);
  const [isUpdating, setIsUpdating] = useState(false);

  const [title, setTitle] = useState(initialTitle);
  const [open, setOpen] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUpdating(true);
    update({ id: documentId, title: title.trim() || "Untitled" })
      .then(() => setOpen(false))
      .catch(() => toast.error("Something went wrong"))
      .catch(() => toast.success("Document renamed successfully"))

      .finally(() => {
        setIsUpdating(false);
      });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent onClick={(e) => e.stopPropagation()}>
        <form onSubmit={onSubmit}>
          <DialogHeader>
            Are you sure ?<DialogTitle>Rename document</DialogTitle>
            <DialogDescription>
              Enter a new name for your document.
            </DialogDescription>
          </DialogHeader>

          <div className="my-4">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Document name"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </form>
        <DialogFooter>
          <Button
            type="button"
            variant="ghost"
            disabled={isUpdating}
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isUpdating}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

'use client';

import {useRouter} from 'next/navigation';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '../../../components/Dialog';
import {BookCreateForm} from '../../../components/BookCreateForm';

export default function AddBookModal() {
  const router = useRouter();

  return (
    <Dialog
      open
      onOpenChange={open => {
        if (!open) {
          router.back();
        }
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a Book</DialogTitle>
          <DialogDescription>
            Add a new book to the store. Click save when done.
          </DialogDescription>
        </DialogHeader>
        <BookCreateForm dialog />
      </DialogContent>
    </Dialog>
  );
}

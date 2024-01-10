'use client';

import {useRouter} from 'next/navigation';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '../../../../components/Dialog';

export default function AddBookModal({params}: {params: {id: string}}) {
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
          <DialogTitle>Edit Book {params.id}</DialogTitle>
          <DialogDescription>
            Update the book and save changes to the store. Click save when done.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

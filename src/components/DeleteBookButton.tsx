import {Trash2} from 'lucide-react';

import {useAppDispatch} from '../lib/hooks';
import {Button} from './Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './Dialog';
import {css} from '../../styled-system/css';
import {deleteBook} from '../lib/features/booksSlice';

export const DeleteBookButton = ({id}: {id?: number}) => {
  const dispatch = useAppDispatch();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" size="icon" disabled={id == null}>
          <Trash2
            className={css({
              w: '4',
              h: '4',
            })}
          />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete book {id}?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete book {id}{' '}
            from the BlazeBooks catalog.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="destructive"
            onClick={() => {
              if (id == null) {
                return;
              }
              dispatch(deleteBook(id));
            }}
          >
            Yes, I&apos;m sure
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

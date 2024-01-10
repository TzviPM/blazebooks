'use client';

import React, {Fragment} from 'react';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

import {Input} from './Input';
import {Button} from './Button';
import {DialogFooter} from './Dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './Form';

const bookSchema = z.object({
  name: z.string(),
  price: z.coerce.number().int().nonnegative(),
  category: z.string(),
  description: z.string(),
});

type FormData = z.infer<typeof bookSchema>;

export interface BookFormProps {
  // onSubmit(data: FormData): void;
  dialog?: boolean;
  initialData?: FormData;
}

export function BookForm({dialog, initialData}: BookFormProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(bookSchema),
    defaultValues: initialData ?? {
      name: '',
      price: 0,
      category: '',
      description: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const ButtonContainer = dialog ? DialogFooter : Fragment;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({field}) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="The Best Book Ever" {...field} />
              </FormControl>
              <FormDescription>The name of the book.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({field}) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input type="number" placeholder="100" {...field} />
              </FormControl>
              <FormDescription>The book&apos;s price.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({field}) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input placeholder="Fiction" {...field} />
              </FormControl>
              <FormDescription>The category or genre.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({field}) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="A book about coming of age" {...field} />
              </FormControl>
              <FormDescription>
                A brief description of the book.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <ButtonContainer>
          <Button type="submit">Save</Button>
        </ButtonContainer>
      </form>
    </Form>
  );
}

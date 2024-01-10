import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
  createContext,
  forwardRef,
  useContext,
  useId,
} from 'react';
import {Slot} from '@radix-ui/react-slot';
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from 'react-hook-form';

import {Label} from './Label';
import {HTMLStyledProps, styled} from '../../styled-system/jsx';
import {css, cx} from '../../styled-system/css';

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{name: props.name}}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const {getFieldState, formState} = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const {id} = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

const FormItem = forwardRef<HTMLDivElement, HTMLStyledProps<'div'>>(
  ({className, ...props}, ref) => {
    const id = useId();

    return (
      <FormItemContext.Provider value={{id}}>
        <styled.div ref={ref} mt="2" mb="2" {...props} />
      </FormItemContext.Provider>
    );
  },
);
FormItem.displayName = 'FormItem';

const FormLabel = (props: ComponentProps<typeof Label>) => {
  const {error, formItemId} = useFormField();

  return (
    <Label
      className={cx(
        error &&
          css({
            color: 'destructive',
          }),
      )}
      htmlFor={formItemId}
      {...props}
    />
  );
};
FormLabel.displayName = 'FormLabel';

const FormControl = forwardRef<
  ElementRef<typeof Slot>,
  ComponentPropsWithoutRef<typeof Slot>
>(({...props}, ref) => {
  const {error, formItemId, formDescriptionId, formMessageId} = useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = 'FormControl';

const FormDescription = forwardRef<HTMLParagraphElement, HTMLStyledProps<'p'>>(
  (props, ref) => {
    const {formDescriptionId} = useFormField();

    return (
      <styled.p
        ref={ref}
        id={formDescriptionId}
        fontSize="sm"
        lineHeight="snug"
        color="muted.foreground"
        {...props}
      />
    );
  },
);
FormDescription.displayName = 'FormDescription';

const FormMessage = forwardRef<HTMLParagraphElement, HTMLStyledProps<'p'>>(
  ({children, ...props}, ref) => {
    const {error, formMessageId} = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) {
      return null;
    }

    return (
      <styled.p
        ref={ref}
        id={formMessageId}
        fontSize="sm"
        fontWeight="medium"
        color="destructive"
        {...props}
      >
        {body}
      </styled.p>
    );
  },
);
FormMessage.displayName = 'FormMessage';

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};

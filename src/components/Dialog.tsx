'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import {X as XIcon} from 'lucide-react';
import {Flex, FlexProps, VisuallyHidden, styled} from '../../styled-system/jsx';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const Overlay = styled(DialogPrimitive.Overlay);

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof Overlay>,
  React.ComponentPropsWithoutRef<typeof Overlay>
>((props, ref) => (
  <Overlay
    ref={ref}
    position="fixed"
    inset="[0]"
    zIndex="modal"
    backgroundColor="gray.700"
    opacity="[0.8]"
    css={{
      '&[data-state="open"]': {
        animationName: 'fadeIn',
      },
      '&[data-state="closed"]': {
        animationName: 'fadeOut',
      },
    }}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const Content = styled(DialogPrimitive.Content);
const Close = styled(DialogPrimitive.Close);
const X = styled(XIcon);

const DialogContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({children, ...props}, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <Content
      ref={ref}
      position="fixed"
      backgroundColor="slate.100"
      left="[50%]"
      top="[50%]"
      transform="translate(-50%, -50%)"
      zIndex="modal"
      display="grid"
      w="full"
      maxW="lg"
      gap="4"
      border="[1px solid]"
      p="6"
      boxShadow="lg"
      rounded={{
        sm: 'lg',
      }}
      transitionDuration="normal"
      css={{
        '&[data-state="open"]': {
          animationName: 'modalIn',
        },
        '&[data-state="closed"]': {
          animationName: 'modalOut',
        },
      }}
      {...props}
    >
      {children}
      <Close
        position="absolute"
        right="4"
        top="4"
        rounded="sm"
        opacity="[0.7]"
        transitionProperty="opacity"
        _hover={{
          opacity: '[1]',
        }}
        _focus={{
          outline: 'none',
          ringWidth: '[2px]',
          ringOffset: '[2px]',
        }}
        _disabled={{
          pointerEvents: 'none',
        }}
      >
        <X h="4" w="4" />
        <VisuallyHidden>Close</VisuallyHidden>
      </Close>
    </Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = (props: FlexProps) => (
  <Flex
    direction="column"
    textAlign="center"
    sm={{
      textAlign: 'left',
    }}
    {...props}
  />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = (props: FlexProps) => (
  <Flex
    flexDir="column-reverse"
    sm={{
      flexDir: 'row',
      justifyContent: 'end',
    }}
    {...props}
  />
);
DialogFooter.displayName = 'DialogFooter';

const Title = styled(DialogPrimitive.Title);

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof Title>,
  React.ComponentPropsWithoutRef<typeof Title>
>((props, ref) => (
  <Title
    ref={ref}
    fontSize="lg"
    fontWeight="semibold"
    lineHeight="none"
    letterSpacing="tight"
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const Description = styled(DialogPrimitive.Description);
const DialogDescription = React.forwardRef<
  React.ElementRef<typeof Description>,
  React.ComponentPropsWithoutRef<typeof Description>
>(({className, ...props}, ref) => (
  <Description ref={ref} fontSize="sm" color="gray.500" {...props} />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};

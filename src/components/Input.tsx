import * as React from 'react';
import {styled, HTMLStyledProps} from '../../styled-system/jsx';

export interface InputProps extends HTMLStyledProps<'input'> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({className, type, ...props}, ref) => {
    return (
      <styled.input
        type={type}
        display="flex"
        h="10"
        w="full"
        rounded="md"
        borderStyle="solid"
        borderWidth="[1px]"
        bg="background"
        px="3"
        py="2"
        fontSize="sm"
        ringColor="background"
        _file={{
          border: 'none',
          bg: 'transparent',
          fontSize: 'sm',
          fontWeight: 'medium',
        }}
        _placeholder={{
          color: 'muted.foreground',
        }}
        _focusVisible={{
          outline: 'none',
          ringWidth: '[2px]',
          ringOffset: '2',
          ringColor: 'ring',
        }}
        _disabled={{
          cursor: 'not-allowed',
          opacity: '[0.5]',
        }}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export {Input};

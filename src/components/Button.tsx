import {cva} from '../../styled-system/css';
import {styled} from '../../styled-system/jsx';

export const buttonStyle = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    rounded: 'md',
    fontSize: 'sm',
    fontWeight: 'medium',
    ringColor: 'background',
    transitionProperty:
      'background-color, border-color, color, fill, stroke, opacity, box-shadow',
    _focusVisible: {
      outline: 'none',
      ringWidth: '[2px]',
      ringColor: 'ring',
      ringOffset: '2',
    },
    _disabled: {
      pointerEvents: 'none',
      opacity: '[0.5]',
    },
  },
  variants: {
    variant: {
      default: {
        bg: 'primary',
        color: 'primary.foreground',
        _hover: {
          opacity: '[0.9]',
        },
      },
      destructive: {
        bgColor: 'destructive',
        color: 'destructive.foreground',
        _hover: {
          bgColor: 'destructive',
          opacity: '[0.9]',
        },
      },
    },
    size: {
      default: {
        h: '10',
        px: '4',
        py: '2',
      },
      icon: {
        h: '10',
        w: '10',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export const Button = styled('button', buttonStyle);

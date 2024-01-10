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
        // 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      },
      outline: {
        // 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      },
      secondary: {
        // 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      },
      ghost: {
        // 'hover:bg-accent hover:text-accent-foreground',
      },
      link: {
        // 'text-primary underline-offset-4 hover:underline',
      },
    },
    size: {
      default: {
        h: '10',
        px: '4',
        py: '2',
      },
      sm: {
        // 'h-9 rounded-md px-3',
      },
      lg: {
        // 'h-11 rounded-md px-8',
      },
      icon: {
        // 'h-10 w-10',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export const Button = styled('button', buttonStyle);

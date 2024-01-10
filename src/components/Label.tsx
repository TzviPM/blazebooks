'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import {styled} from '../../styled-system/jsx';
import {cva} from '../../styled-system/css';

const labelStyles = cva({
  base: {
    fontSize: 'sm',
    lineHeight: 'none',
    fontWeight: 'medium',
    _peerDisabled: {cursor: 'not-allowed', opacity: '[0.7]'},
  },
});

export const Label = styled(LabelPrimitive.Root, labelStyles);

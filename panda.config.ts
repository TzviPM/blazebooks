import {defineConfig} from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        zIndex: {
          modal: {
            value: 50,
          },
        },
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        fadeOut: {
          from: {
            opacity: 1,
          },
          to: {
            opacity: 0,
          },
        },
        modalIn: {
          from: {
            opacity: 0,
            transform: 'scale(0.95) translate(-50%, -48%)',
          },
          to: {
            opacity: 1,
            transform: 'scale(1) translate(0)',
          },
        },
        modalOut: {
          from: {
            opacity: 1,
            transform: 'scale(1) translate(0)',
          },
          to: {
            opacity: 0,
            transform: 'scale(0.95) translate(-50%, -48%)',
          },
        },
      },
    },
    semanticTokens: {
      colors: {
        primary: {
          DEFAULT: {
            value: '{colors.blue.500}',
          },
          foreground: {
            value: '{colors.slate.100}',
          },
        },
        destructive: {
          DEFAULT: {
            value: '{colors.red.500}',
          },
          foreground: {
            value: '{colors.slate.100}',
          },
        },
        muted: {
          DEFAULT: {
            value: '{colors.slate.100}',
          },
          foreground: {
            value: '{colors.slate.700}',
          },
        },
        background: {
          value: '{colors.slate.100}',
        },
        foreground: {
          value: '{colors.slate.900}',
        },
        ring: {
          value: '{colors.teal.600}',
        },
      },
    },
  },

  strictTokens: true,
  jsxFramework: 'react',

  // The output directory for your css system
  outdir: 'styled-system',
});

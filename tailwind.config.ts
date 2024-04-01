import headlessUIPlugin from '@headlessui/tailwindcss';
import formsPlugin from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [formsPlugin, headlessUIPlugin],
} satisfies Config;

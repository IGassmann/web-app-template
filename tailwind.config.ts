import defaultTheme from 'tailwindcss/defaultTheme';

const tailwindCSSConfig = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@headlessui/tailwindcss'),
  ],
};

export default tailwindCSSConfig;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#F4EFE5',       // replace with your actual hex
        'bg-secondary': '#E35336',
        'text-primary': '#05081C',
        'text-secondary': '#984959',
        'accent': '#305CDE',
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      fontSize: {
        'display-1': ['5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-1': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-2': ['2.25rem', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-3': ['1.875rem', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-4': ['1.5rem', { lineHeight: '1.4', fontWeight: '700' }],
        'body': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.25', fontWeight: '400' }],
        'button': ['1rem', { lineHeight: '1.5', fontWeight: '600' }],
        'hyperlink': ['1rem', { lineHeight: '1.5', fontWeight: '500', textDecoration: 'underline' }],
      },
    },
  },
  plugins: [],
}

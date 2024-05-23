import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        '100': '100px',
        '200': '200px',
        '300': '300px',
        '400': '400px',
        '500': '500px',
        // Add more custom sizes as needed
      },
      height: {
        '40': '40px',
        '50': '50px',
        '70': '70px',
        '100': '100px',
        '200': '200px',
        '300': '300px',
        // Add more custom sizes as needed
      },
    },
    screens: {
      'lg': '1280px',
    }
  },
  plugins: [],
}
export default config

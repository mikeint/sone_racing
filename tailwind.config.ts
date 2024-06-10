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
        '20': '20px',
        '30': '30px',
        '40': '40px',
        '50': '50px',
        '60': '60px',
        '69': '69px',
        '70': '70px',
        '80': '80px',
        '90': '90px',
        '100': '100px',
        '170': '170px',
        '180': '180px',
        '190': '190px',
        '200': '200px',
        '300': '300px',
        '400': '400px',
        '500': '500px',
      },
      height: {
        '20': '20px',
        '30': '30px',
        '40': '40px',
        '50': '50px',
        '60': '60px',
        '70': '70px',
        '80': '80px',
        '90': '90px',
        '100': '100px',
        '200': '200px',
        '300': '300px',
      },
    },
    screens: {
      'lg': '1280px',
      'sm': '768px',
    }
  },
  plugins: [],
}
export default config

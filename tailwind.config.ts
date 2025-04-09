import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBackground: '#F2FBF5',
        darkBackground: '#001A12',
        secondaryDarkBackground: '#00251A',
        primaryTextColor: '#1A3D2F',
        darkTextColor: '#E6FAEA',
        button: '#0FA34D'
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
} satisfies Config;

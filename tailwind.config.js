module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,mdx}",
    "./src/components/**/*.{js,jsx,mdx}",
    "./src/app/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        grotesk: "'Space Grotesk','sans-serif'",
        exo2: "'Exo 2','sans-serif'",
        mono: "'Space Mono', 'monospace'",
        robo: " 'Roboto', 'sans-serif'",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('daisyui'),
  ],
};

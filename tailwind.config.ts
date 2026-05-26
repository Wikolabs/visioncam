import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Audiowide'", "sans-serif"],
        body: ["'Noto Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

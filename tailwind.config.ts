import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#069",
        secondary: "#38e"
      },
      backgroundImage: {
        "dark-gradient":
          "linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)",
      },
    },
  },
  plugins: [heroui()],
} satisfies Config;

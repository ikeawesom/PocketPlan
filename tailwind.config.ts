import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "custom-primary": "#9961F4",
      "custom-secondary": "#D5C0F8",
      "custom-border": "#31363C",
      "custom-black": "#0E1116",
      "custom-dark-grey": "#22262C",
      "custom-light-grey": "#868D96",
      "custom-light-text": "#EFF3F7",
    },
  },
  plugins: [],
};
export default config;

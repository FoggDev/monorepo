import type { Config } from "tailwindcss";
import { join } from "path";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    join(__dirname, "../../packages/ui/src/**/*.{ts,tsx,js,jsx}"),
    join(__dirname, "../../packages/ui/dist/**/*.{js,jsx}")
  ],
  theme: {
    extend: {}
  },
  plugins: []
};

export default config;

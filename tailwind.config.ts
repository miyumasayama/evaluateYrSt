import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        button: {
          primary: "oklch(54.6% 0.245 262.881)",
          secondary: "oklch(62.7% 0.194 149.214)",
          error: "oklch(57.7% 0.245 27.325)",
        },
      },
    },
  },
};
export default config;

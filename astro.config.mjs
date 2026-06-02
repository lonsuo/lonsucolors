// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Space Grotesk",
      cssVariable: "--font-space-grotesk",
      weights: [300, 400, 700],
      styles: ["normal"],
    },
  ],
});

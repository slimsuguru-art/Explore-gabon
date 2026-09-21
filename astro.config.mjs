import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://slimsuguru-art.github.io/Explore-gabon",
  base: "/Explore-gabon",
  trailingSlash: "always",
  integrations: [tailwind()],
  output: "static"
});

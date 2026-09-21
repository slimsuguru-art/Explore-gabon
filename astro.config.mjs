import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://slimsuguru-art.github.io",
  base: "/explore-gabon",
  trailingSlash: "always",
  integrations: [tailwind()],
  output: "static"
});

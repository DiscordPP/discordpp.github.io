const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const mdx = require("@next/mdx")({
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});

/** @type {import("next").NextConfig} */
module.exports = withPlugins([
  [mdx, {
    reactStrictMode: true,
    basePath: "/docs",
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"]
  }],
  [optimizedImages, {
    /* config for next-optimized-images */
  }]
], {
  images: {
    disableStaticImages: true // Conflicts with next-optimized-images otherwise
  }
});

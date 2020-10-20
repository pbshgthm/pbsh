const withPlugins = require('next-compose-plugins');

const optimizedImages = require('next-optimized-images');

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

module.exports = withPlugins([
	[optimizedImages, {
		optimizeImages: false,
		optimizeImagesInDev: true
  }],
  [withMDX, {
	  pageExtensions: ["js", "jsx", "md", "mdx"]
  }]
]);
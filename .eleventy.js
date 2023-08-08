module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("fonts/MPLUSRounded1c-Regular.ttf");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  return {
    dir: {
      output: "docs", // Output directory for the generated files
    },
  };
};

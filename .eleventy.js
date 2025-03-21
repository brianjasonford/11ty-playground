const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = (eleventyConfig) => {

    // Passthroughs
    eleventyConfig.addPassthroughCopy('./src/css/');

    // Plugins
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

	return {
		dir: {
			input: 'src',
			output: 'public',
		},
	};
};

module.exports = (eleventyConfig) => {

    // Passthroughs
    eleventyConfig.addPassthroughCopy('./src/css/');
    
	return {
		dir: {
			input: 'src',
			output: 'public',
		},
	};
};

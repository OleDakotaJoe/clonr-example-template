module.exports = {
	globDirectory: 'src/',
	exclude: [
		''
	],
	globPatterns: [
		'**/*.{tsx,css,ts,js,json,svg,png,jpg}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
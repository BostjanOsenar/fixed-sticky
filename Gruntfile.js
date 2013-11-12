/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			files: ['fixedsticky.css', 'fixedsticky.js', 'test/fixed-sticky-tests.js'],
			tasks: 'qunit'
		},
		qunit: {
			all: ['test/**/*.html']
		},
		'gh-pages': {
			options: {},
			src: ['fixedsticky.css', 'fixedsticky.js', 'bower_components/**/*', 'test/**/*', 'demos/**/*']
		}
	});

	require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );

	// Default task.
	grunt.registerTask( 'test', [ 'qunit' ] );
	grunt.registerTask( 'default', [ 'qunit' ] );
};

module.exports = function(grunt) {
	// 1. All configuration goes here 
	    grunt.initConfig({
	        pkg: grunt.file.readJSON('package.json'),

	        // 2. Configuration for imagemin files goes here.
			//
			copy: {
				main: {
					files: [
					  // includes files within path
					  {expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'},

					  // includes files within path and its sub-directories
					  {expand: true, src: ['path/**'], dest: 'dest/'},

					  // makes all src relative to cwd
					  {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},

					  // flattens results to a single level
					  {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'}
					]
				}
			}

		});
	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-copy');
	

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['copy']);
};
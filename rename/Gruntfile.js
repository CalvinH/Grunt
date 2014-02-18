module.exports = function(grunt) {
	// 1. All configuration goes here 
	    grunt.initConfig({
	        pkg: grunt.file.readJSON('package.json'),

	        // 2. Configuration for imagemin files goes here.
			
			//rename or move files and folders
			rename: {
		        moveThis: {
		            src: 'optimized/',
		            dest: 'build/'
		        },
		    }

		});
	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-rename');

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['rename']);
};
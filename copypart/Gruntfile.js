module.exports = function(grunt) {
	// 1. All configuration goes here 
	    grunt.initConfig({
	        pkg: grunt.file.readJSON('package.json'),
	        
	        // 2. Configuration for imagemin files goes here.
			//
			'copy-part-of-file': {
      			simple_replace_scripts: {
          			options: {
							sourceFileStartPattern: '<!-- SIMPLE START -->',
							sourceFileEndPattern: '<!-- SIMPLE END -->',
							destinationFileStartPattern: '<!-- START -->',
							destinationFileEndPattern: '<!-- END -->'
					},
					files: {
			           'test/fixtures/simple-destination.html': ['test/fixtures/simple-source.html']
			         	}
			    }
  			},

		});
	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-copy-part-of-file');

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['copy-part-of-file']);
};
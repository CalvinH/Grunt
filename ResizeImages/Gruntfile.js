module.exports = function(grunt) {
	// 1. All configuration goes here 
	    grunt.initConfig({
	        pkg: grunt.file.readJSON('package.json'),

	        // 2. Configuration for imagemin files goes here.
			//
			responsive_images:{
				myTask: {
			      options: {
			        sizes: [{
			        	name:'large',
			        	width: 990
			        },
			        {
				        name: 'medium',
				        width: 660
			        },
			        {
			        	name: 'small',
			        	width: 320
			        },
			        {
			        	name: "thumbnail",
			        	width: 150
			        }]
			      },
			      files: [{
			        expand: true,
			        src: ['**.{jpg,gif,png}'],
			        cwd: 'images/',
			        custom_dest: 'responsive_images/{%= width %}/'
			      }]
			    }
			},
			//
			imagemin: {
			    dynamic: {
			        files: [{
			            expand: true,
			            cwd: 'responsive_images/',
			            src: ['**/*.{png,jpg,gif}'],
			            dest: 'optimized/'
			        }]
			    }
			},
			//
			rename: {
		        moveThis: {
		            src: 'optimized/',
		            dest: 'build/'
		        },
		    }

		});
	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-rename');

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['responsive_images','imagemin','rename']);
};
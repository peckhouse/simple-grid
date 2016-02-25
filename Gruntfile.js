module.exports = function(grunt) {

	// Project configuration.
  grunt.initConfig({
    server: {
      port: grunt.option('port') || 76543
    },
		
		pkg: grunt.file.readJSON('package.json'),

		sass: {
      compressed: {
        options: {
          sourcemap: "none",
          style: 'compressed'
        },
        files: {
          'scss/builds/styles.min.css': 'scss/styles.scss'
        }
      },
      expanded: {
        options: {
          sourcemap: "none",
          style: 'expanded'
        },
        files: {
          'scss/builds/styles.css': 'scss/styles.scss'
        }
      }
    },

    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer')({browsers: ['last 5 versions', 'ie 9', 'Safari >= 6.0']})
        ]
      },
      dist: {
        files: {
          'simple-grid.min.css': 'scss/builds/styles.min.css',
          'simple-grid.css': 'scss/builds/styles.css'
        }
      }
    },

    watch: {
      css: {
        files: ['scss/styles.scss','scss/components/*.{css,scss}'],
        tasks: ['sass', 'postcss']
      }
    }
	});
	
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['sass', 'postcss', 'watch']);
};
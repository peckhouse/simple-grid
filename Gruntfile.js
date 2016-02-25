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
          'src/scss/builds/styles.min.css': 'src/scss/styles.scss'
        }
      },
      expanded: {
        options: {
          sourcemap: "none",
          style: 'expanded'
        },
        files: {
          'src/scss/builds/styles.css': 'src/scss/styles.scss'
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
          'simple-grid.min.css': 'src/scss/builds/styles.min.css',
          'simple-grid.css': 'src/scss/builds/styles.css'
        }
      }
    },

    watch: {
      css: {
        files: ['src/scss/styles.scss','src/scss/components/*.{css,scss}'],
        tasks: ['sass', 'postcss']
      }
    }
	});
	
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['sass', 'postcss', 'watch']);
};
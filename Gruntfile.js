module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      dev: {
        files: [
          '**/*.scss',
          '**/*.html'
        ],
        tasks: ['dev'],
        options: {
          spawn: false,
          livereload: true
        }
      }
    },
    sass:{
      dev: {
        options:{
          includePaths: ['node_modules/'],
          sourceMap: true
        },
        files:{
          'test/css/main.css':'nicecss.scss'
        }
      }
    },
    sassdoc: {
      default: {
        src: ['*.scss','**!(bower_components)/*.scss'],
        options: {
          dest: 'docs',
          theme: 'flippant'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-sassdoc');
  
  // Default task(s).
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('dev', ['sass']);
};
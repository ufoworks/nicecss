module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      dev: {
        files: [
          'source/**/*.js',
          'source/scss/**/*.scss',
          'source/*.html',
          'source/**/*.html',
          'source/**/*.php',
          'source/biografias/**'
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
        files:{
          'test/css/main.css':'nicepure.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  // Default task(s).
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('dev', ['sass']);
};
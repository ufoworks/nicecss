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
        files:{
          'test/css/main.css':'nicecss.scss'
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
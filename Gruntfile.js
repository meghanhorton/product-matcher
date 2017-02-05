module.exports = function(grunt) {
  grunt.initConfig ({
    sass: {
      dist: {
        files: {
          'public/assets/css/app.css' : 'assets/css/app.scss'
        }
      }
    },
    watch: {
      sass: {
        files: ['assets/css/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true
        }
      },
      server: {
        files: ['views/**/*.html','views/*.html'],
        options:{
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass','watch']);
  grunt.registerTask('build',['sass']);
};
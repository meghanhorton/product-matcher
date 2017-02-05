module.exports = function(grunt) {
  grunt.initConfig ({
    sass: {
      dist: {
        files: {
          'public/assets/css/app.css' : 'assets/sass/app.scss'
        }
      }
    },
    nodemon: {
      dev: {
        script: 'app.js'
      }
    },
    watch: {
      sass: {
        files: ['assets/sass/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');


  grunt.registerTask('default', ['nodemon','sass','watch']);
  grunt.registerTask('build',['sass']);
};
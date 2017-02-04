module.exports = function(grunt) {
  grunt.initConfig ({
    sass: {
      dist: {
        files: {
          'public/assets/css/app.css' : 'assets/sass/app.scss'
        }
      }
    },
    watch: {
      source: {
        files: ['views/**/*.handlebars','assets/sass/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true, // needed to run LiveReload
          host: 'localhost',
          port: 9000
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  grunt.registerTask('default', ['sass']);
};
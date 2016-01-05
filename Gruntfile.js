module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          paths: ["public/css"],
          plugins: [
            new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
          ]
        },
        files: {
          "public/css/main.min.css": "public/css/*.less"
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1,
        keepSpecialComments: 0
      },
      target: {
        files: {
          'public/css/main.min.css': ['public/css/*.less', 'public/css/*.css']
        }
      }
    },
    watch: {
      scripts: {
        files: ['public/css/*.less', 'public/css/*.css'],
        tasks: ['less', 'cssmin']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify']);

};
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
          "public/css/base.min.css": "public/css/*.less"
        }
      },
      production: {
        //ARQUIVO TESTE, SEM NECESSIDADE DE PRODUCTION
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'public/css/base.min.css': ['public/css/base.min.css']
        }
      }
    },
    watch: {
      scripts: {
        files: ['public/css/*.less'],
        tasks: ['less', 'cssmin']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify']);

};
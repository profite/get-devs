module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    minifyHtml: {
      options: {
        cdata: true,
        removeComments: true,
        collapseWhitespace: true
      },
      dist: {
        files: {
          'dist/index.min.html': 'index.html'
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'dist/js/script.min.js': ['src/js/script.js', 'src/js/script.1.js'],
        }
      }
    },
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2 
        },
        files: { 
          'dist/css/style.css': 'src/style/imports.less',
        }
      },
    },
    watch: {
      styles: {
        files: ['src/style/less/*.less'],
        tasks: ['less'],
        options: {
          debounceDelay: 250,
        }
      }
    }
  });

  grunt.registerTask('default', ['minifyHtml', 'uglify', 'less', 'watch']);
}; 
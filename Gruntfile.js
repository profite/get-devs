module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    minifyHtml: {
      options: {
        cdata: true
      },
      dist: {
        files: {
          'dist/index.html': 'index.html'
        }
      }
    },
  });

  grunt.registerTask('default', ['minifyHtml']);
}; 
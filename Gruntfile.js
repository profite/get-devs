module.exports = function (grunt) {
  grunt.config.init({
    htmlmin: {
      file: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          src: 'src/index.html',
          dest: 'dist/'
        }
      }
    }
  });
};
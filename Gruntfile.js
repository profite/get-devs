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
          'dist/css/imports.css': 'src/style/imports.less',
          'dist/css/footer.css': 'src/style/layout/footer.less',
          'dist/css/header.css': 'src/style/layout/header.less',
          'dist/css/menu-product.css': 'src/style/layout/menu-product.less',
          'dist/css/product.css': 'src/style/layout/product.less',
          'dist/css/seach-options.css': 'src/style/layout/search-options.less',
          'dist/css/functionality.css': 'src/style/base/functionality.less',
          'dist/css/grid.css': 'src/style/base/grid.less',
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
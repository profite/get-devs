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
          'dist/css/header.css': 'src/style/less/header.less',
          'dist/css/footer.css': 'src/style/less/footer.less',
          'dist/css/search-options.css': 'src/style/less/search-options.less',
          'dist/css/products.css': 'src/style/less/products.less',
          'dist/css/menu-product.css': 'src/style/less/menu-product.less'
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
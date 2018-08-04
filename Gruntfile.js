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
          'dist/js/script.min.js': ['src/js/funcionalidades.js'],
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
          'dist/css/style.min.css': 
          ['src/style/reset.less',
           'src/style/layout/footer.less',
            'src/style/layout/header.less',
             'src/style/layout/menu-product.less',
              'src/style/layout/product.less',
               'src/style/layout/search-options.less',
                'src/style/helpers/filter.less',
                 'src/style/base/functionality.less',
                  'src/style/base/grid.less'],
        }
      },
    },
    watch: {
      styles: {
        files: [
          'src/style/base/*.less',
           'src/style/helpers/*.less',
            'src/style/layout/*.less',
             'src/style/reset.less'],
        tasks: ['less'],
        options: {
          debounceDelay: 250,
        }
      }
    }
  });

  grunt.registerTask('default', ['minifyHtml', 'uglify', 'less', 'watch']);
}; 
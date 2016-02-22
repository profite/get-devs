module.exports = function( grunt ) {

  grunt.initConfig({

    uglify : {
      options : {
        mangle : false
      },

      my_target : {
        files : {
          'assets/js/main.js' : [ 'assets/_js/scripts.js' ],
          'assets/js/slider.js' : [ 'assets/_js/slider.js' ]
        }
      }
    }, // uglify

    imagemin: {

      public: {

        expand: true,
        cwd: 'assets/images',
        src: '**/*.{png,jpg,gif}',
        dest: 'assets/images'
      }
    },  // imagemin

    sass : {
      dist : {
        options : { style : 'compressed' },
        files : {
          'assets/css/main.css' : 'assets/sass/main.scss'
        }
      }
    }, // sass



    watch : {
      dist : {
        files : [
          'assets/_js/**/*',
          'assets/sass/**/*'
        ],

        tasks : [ 'uglify', 'sass' ]
      }
    } // watch

  });


  // Plugins do Grunt
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks( 'grunt-contrib-sass' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );


  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'uglify', 'sass', 'imagemin' ] );

  // Tarefa para Watch
  grunt.registerTask( 'w', [ 'watch' ] );

};

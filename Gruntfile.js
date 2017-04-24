'use strict';
module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({

        sass: {
            dist: {
                files: {
                    'assets/css/main.css': 'assets/sass/main.scss'
                }
            }
        }, //sass
        watch: {
            css: {
                files: 'assets/sass/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            }
        }//watch
    });

//loading tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');


// tasks
    grunt.registerTask('default', ['watch', 'sass']);
};

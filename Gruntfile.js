module.exports = function(grunt) {

	var config = {
	    src: './Client',
	    dest: './wwwroot'
	};

	var files = {
	    entry: config.src + '/scripts/App.js',
	    code: [ config.src + '/scripts/*.js', config.src + '/scripts/*.jsx', config.src + '/scripts/**/*.js', config.src + '/scripts/**/*.jsx'],
	    styles: [ config.src + '/styles/sass/*.sass', config.src + '/styles/sass/*.scss', config.src + '/styles/sass/**/*.sass', config.src + '/styles/sass/**/*.scss' ],
	    html: config.src + '/*.html',
	    sass: config.src + '/styles/sass/bundle.scss'
	};

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		sass: {
	    	dist: {
		        files: {
		          './Client/styles/bundle.css' : './Client/styles/sass/app.scss'
		        }
	      	}
	    },
		browserify: {
	        dist: {
	            options: {
	               transform: [["babelify", {"stage": 0}]  ]
	            },
	            files: {
	               "./Client/producion.js": [files.entry]
	            }
	        }
	    },
	    watch: {
	     	scripts: {
	        	files: [files.code],
	        	tasks: ['clean:scripts', "browserify",'concat:js'],
	        	//MUST INSTALL LIVE RELOAD ADD ON FOR BROWSER
		        options: {
		          livereload: true
		        }
	     	}
	     	,css: {
	        	files: [files.styles],
		        tasks: ['clean:styles','sass','concat:css'],
		        //MUST INSTALL LIVE RELOAD ADD ON FOR BROWSER
		        options: {
		          livereload: true
		        }
	    	}
	  	},
	  	clean: {
	        styles: {
	          src: [ './Client/styles/bundle.css', './Client/bundle.css' ]
	        },
	        scripts: {
	          src: [ './Client/producion.js', './Client/bundle.js' ]
	        },
	        build: {
		        files: [{
		          dot: true,
		          src: [
		            config.dest
		          ]
		        }]
	      	}
	    },
	  	concat: { 
			js: {
				src: [
					'./Client/scripts/jquery/jquery.js',
					'./Client/scripts/modernizr/modernizr.js',
					'./Client/scripts/jquery/royalslider/jquery.royalslider.min.js',
					'./Client/scripts/jquery/mmenu/jquery.mmenu.min.all.js',
					'./Client/scripts/jquery/placeholders.jquery.js.js',
					'./Client/json/loja.js',
					'./Client/producion.js',
					'./Client/scripts/init.js'
				],
				dest: './Client/bundle.js'
			}
			,css: {
				src: [
					//'./Client/materialdesign/material.css',
					'./Client/scripts/jquery/mmenu/jquery.mmenu.all.css',
					'./Client/scripts/jquery/royalslider/royalslider.css',
					'./Client/styles/bundle.css'
				],
				dest: './Client/bundle.css'
			}
		},
	    htmlmin: {
	      dist: {
	        options: {
	              removeComments: true,
	              collapseWhitespace: true
	            },  
	            files: {
	              './wwwroot/index.html': './Client/index.html'
	            }
	        }
	    },
	    cssmin: {
	      minify: {
	        options: {
	          	banner: '/*\n' +
	                  'Theme Name: Desafio - Front-End\n' +
	                  'Description: Desafio - Front-End\n' +
	                  'Author: Paula J Bastos\n' +
	                  'Theme URI: http://www.paulajbastos.com\n' +
	                  'Author URI: http://paulajbastos.com\n' +
	                  'Version: 1.0\n' +
	                  'License: GNU General Public License v2 or later\n' +
	                  'License URI: http://www.gnu.org/licenses/gpl-2.0.html\n' +
	                  //'Tags: white, orange, purple\n' +
	                  'Text Domain: Desafio Front-End\n' +
	                  '*/\n'
	        },
	        files: {
	          './wwwroot/bundle.css': ['./Client/bundle.css']
	        }
	      }
	    },
	    imagemin: {
	      dist: {
	        //funciona
	        files: [{  
	            expand: true,
	            cwd: './Client/images/',
	            src: ['**/*.{png,jpg,gif}'],
	            dest: './wwwroot/images/'
	        }]
	      }
	    },
	    uglify: {
	        assets: {
	          	src: './Client/bundle.js',
	        	dest: './wwwroot/bundle.js'
	        }
	    },
	    copy: {
	    	main: {
			    files: [
			      {
			        expand: true,
			        cwd: 'bower_components/jquery/dist/',
			        src: ['jquery.js'],
			        dest: './Client/scripts/jquery/'
			      },
			      {
			        expand: true,
			        cwd: 'bower_components/owlcarousel/owl-carousel/',
			        src: ['*'],
			        dest: './Client/scripts/owlcarousel/'
			      },
			      {
			        expand: true,
			        cwd: 'bower_components/fontawesome/scss',
			        src: ['*'],
			        dest: './Client/styles/fontawesome/scss'
			      },
			      {
			        expand: true,
			        cwd: 'bower_components/fontawesome/fonts',
			        src: ['*'],
			        dest: './Client/fonts/'
			      }
			    ]
			},
			build: {
				files: [
					{ expand: true, flatten: true, src: './Client/fonts/*', dest: './wwwroot/fonts/' }
				]
			}
		}	
  	});
  
	
  	grunt.loadNpmTasks('grunt-react');
  	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
  	grunt.loadNpmTasks('grunt-contrib-htmlmin');
  	grunt.loadNpmTasks('grunt-contrib-copy');

	// Default task(s).
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('copyfiles', ['copy:main']);
	grunt.registerTask('build', ['clean:build', 'sass', 'browserify', 'concat', 'htmlmin', 'cssmin', 'imagemin', 'uglify', 'copy:build']);

};

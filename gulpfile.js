var gulp 		= require('gulp'),
	imagemin 	= require('gulp-imagemin'),
	clean 		= require('gulp-clean'),
	concat 		= require('gulp-concat'),
	htmlReplace	= require('gulp-html-replace'),
	uglify		= require('gulp-uglify'),
	usemin		= require('gulp-usemin'),
	cssmin		= require('gulp-cssmin'),
	browserSync = require('browser-sync'),
	jshint		= require('gulp-jshint'),
	jshintStyle	= require('jshint-stylish'),
	csslint		= require('gulp-csslint');

//executar *todas as tarefas abaixo: npm run gulp
gulp.task('default', ['copy'], function(){
	gulp.start('build-img', 'usemin');
});

//faz cópia do arquivo original com o nome de "final"
gulp.task('copy', ['clean'], function(){

	return gulp.src('src/**/*')
		.pipe(gulp.dest('final'));
});

gulp.task('clean', function(){

	return gulp.src('final')
		.pipe(clean());
});

//minifica as imagens da pasta uploads
gulp.task('build-img', function(){

	gulp.src('final/uploads/**/*')
	.pipe(imagemin())
	.pipe(gulp.dest('final/uploads'));
});

//mágica! usemin vai ler, concatenar, minificar...
gulp.task('usemin', function(){

	gulp.src('final/**/*.html')
		.pipe(usemin({
			'js' : [uglify],
			'css' : [cssmin]
		}))
		.pipe(gulp.dest('final'));
});

//fim da execução de toda tarefa run gulp*

//atualiza automaticamente o navegador com o novo código
//npm run gulp server
gulp.task('server', function(){

	browserSync.init({
		server: {
			baseDir: 'src'
		}
	});

	//lista(terminal) erros nos aquivos js
	gulp.watch('src/js/*.js').on('change', function(event){
		gulp.src(event.path)
			.pipe(jshint())
			.pipe(jshint.reporter(jshintStyle));
	});

	//lista(terminal) erros nos aquivos css
	gulp.watch('src/css/*.css').on('change', function(event){
		gulp.src(event.path)
			.pipe(csslint())
			.pipe(csslint.reporter());
	});
	gulp.watch('src/**/*').on('change', browserSync.reload);
});
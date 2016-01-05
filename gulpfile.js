const gulp      = require('gulp');
const plumber   = require('gulp-plumber');
const sass      = require('gulp-sass');
const webserver = require('gulp-webserver');
const opn       = require('opn');

const sourcePaths = {
  styles: ['src/scss/**/*.scss'] //set the path to source folder
};

const distPaths = {
  styles: 'dist/css' //set the path to distribution folder
};

const server = {
  host: 'localhost',
  port: '8000'
}

gulp.task('sass', function () {
  gulp.src( sourcePaths.styles ) //pass the styles of sourcePaths to pipe
    .pipe(plumber()) //prevent pipe breaking caused by errors from gulp plugins
    .pipe(sass()) //sass to css
    .pipe(gulp.dest( distPaths.styles )); //define destination paths using path variables
});

gulp.task('webserver', function() {
  gulp.src( '.' )
    .pipe(webserver({
      host:             server.host,
      port:             server.port,
      livereload:       true, //reloads when files changes
      directoryListing: false
    }));
});

gulp.task('openbrowser', function() {
  opn( 'http://' + server.host + ':' + server.port ); //opens files like website
});

gulp.task('watch', function(){
  gulp.watch(sourcePaths.styles, ['sass']);
});

gulp.task('build', ['sass']);

gulp.task('default', ['build', 'webserver', 'watch', 'openbrowser']);

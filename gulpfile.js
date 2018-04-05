var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
//require useref
var useref = require('gulp-useref');
// minify
var uglify = require('gulp-uglify');
// gulp-if
var gulpIf = require('gulp-if');
// minify Css files
var minifyCss = require('gulp-minify-css');
// optimize images
var imagemin = require('gulp-imagemin');
// require jshint
var jshint = require('gulp-jshint');
// Live-reloading with Browser Sync
var browserSync = require('browser-sync').create();

gulp.task('browserSync',function(){
    browserSync.init({
      server:{
        baseDir: ["./","./app"]
      }
    });
})

// Converts Sass to CSS with gulp-sass
gulp.task('sass', function(){
  return gulp.src('app/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
});

// concat files and minify
gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', minifyCss()))
    .pipe(gulp.dest('dist'))
});

// optimize images
gulp.task('images',function(){
    return gulp.src('app/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
});

// detects JavaScript errors
gulp.task('lint', function() {
  return gulp.src('./lib/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('YOUR_REPORTER_HERE'));
});

// Gulp watch syntax
////browserSync
////sass
gulp.task('watch', ['browserSync', 'sass', 'useref', 'images'], function (){
  gulp.watch('app/scss/imports/*.scss',['sass']);
  gulp.watch('app/scss/*.scss',['sass']);
});

// Default Task
gulp.task('default', ['watch']);

var gulp = require('gulp'),
jsValidate = require('gulp-jsvalidate'),
uglify = require('gulp-uglify'),
less = require('gulp-less'),
concatCss = require('gulp-concat-css'),
autoprefixer = require('gulp-autoprefixer'),
minifyCss = require('gulp-minify-css'),
rename = require("gulp-rename"),
cssComb = require('gulp-csscomb'),
cssCombLint = require('gulp-csscomb-lint'),
cssBeautify = require('gulp-cssbeautify'),
watch = require('gulp-watch');

var pattern = ["js/**", "!js/profit-e.js"];

gulp.task('copy-l20n', function() {
  gulp.src('locales/**')
  .pipe(gulp.dest('dist/locales/'));
});

gulp.task('copy-design', function() {
  gulp.src('design/**')
  .pipe(gulp.dest('dist/design/'));
});

gulp.task('copy-img', function() {
  gulp.src('img/**')
  .pipe(gulp.dest('dist/img/'));
});

gulp.task('copy-html', function() {
  gulp.src('**.html')
  .pipe(gulp.dest('dist/'));
});

gulp.task('copy-js', function() {
  gulp.src(pattern)
  .pipe(gulp.dest('dist/js/'));
});

gulp.task('copy-css', function() {
  gulp.src('css/*.css')
  .pipe(gulp.dest('dist/css/'));
});

gulp.task('copy-api', function() {
  gulp.src('api/*.json')
  .pipe(gulp.dest('dist/api/'));
});

gulp.task('make-js', function () {
  return gulp.src('js/profit-e.js')
  .pipe(jsValidate())
  // .pipe(uglify())
  .pipe(rename(function (path) {
    path.basename += ".min";
  }))
  .pipe(gulp.dest('dist/js/'));
});

gulp.task('make-less', function() {
  gulp.src('less/structure-base.less')
  .pipe(less())
  .pipe(concatCss("profit-e.css"))
  .pipe(cssComb())
  .pipe(cssBeautify({
    indent: '  ',
    openbrace: 'end-of-line',
    autosemicolon: true
  }))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(minifyCss({compatibility: 'ie8'}))
  .pipe(rename(function (path) {
    path.basename += ".min";
  }))
  .pipe(cssCombLint())
  .pipe(gulp.dest('dist/css/'));
});

gulp.task('watch', ['make-js', 'make-less', 'copy-html', 'copy-css', 'copy-js', 'copy-l20n', 'copy-design', 'copy-img', 'copy-api'], function() {
  gulp.watch('js/profit-e.js', ['make-js']);
  gulp.watch('less/*.less', ['make-less']);
  gulp.watch('**.html', ['copy-html']);
  gulp.watch('css/*.css', ['copy-css']);
  gulp.watch(pattern, ['copy-js']);
  gulp.watch('locales/**', ['copy-l20n']);
  gulp.watch('design/**', ['copy-design']);
  gulp.watch('img/**', ['copy-img']);
  gulp.watch('api/*.json', ['copy-api']);
})

gulp.task('default', ['make-js', 'make-less', 'copy-html', 'copy-css', 'copy-js', 'copy-l20n', 'copy-design', 'copy-img']);

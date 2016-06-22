var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    less   = require("gulp-less"),
    paths = {
      less:       ['./desenv/less/**/*.less'],
      controller: ['./desenv/js/controllers/*.js'],
      service:    ['./desenv/js/services/*.js'],
      boot:       ['./desenv/js/boot/*.js']
    };

gulp.task('less', function () {
  return gulp.src('./desenv/less/main.less')
         .pipe(less())
         .pipe(gulp.dest('./public/assets/css'));
});

gulp.task('angular', function() {
  return gulp.src(['./bower_components/angular/angular.min.js','./bower_components/angular-route/angular-route.min.js'])
      .pipe(concat('angular.min.js'))
      .pipe(gulp.dest('./public/assets/js'));
});

gulp.task('boot', function() {
  return gulp.src(paths.boot)
      .pipe(concat('boot.js'))
      .pipe(gulp.dest('./desenv/concat'));
});

gulp.task('controller', function() {
  return gulp.src(paths.controller)
      .pipe(concat('controller.js'))
      .pipe(gulp.dest('./desenv/concat'));
});

gulp.task('service', function() {
  return gulp.src(paths.service)
      .pipe(concat('service.js'))
      .pipe(gulp.dest('./desenv/concat'));
});

gulp.task('fetchApp', ['boot', 'controller', 'service'], function() {
  return gulp.src(['./desenv/concat/boot.js',
                   './desenv/concat/controller.js',
                   './desenv/concat/service.js'])
      //.pipe(uglify({mangle: false}))
      .pipe(concat('main.js'))
      .pipe(gulp.dest('./public/assets/js'));
});

gulp.task('default', function() {
  gulp.watch(paths.less, ['less']);
  gulp.watch('./desenv/js/**/*.js', ["fetchApp"]);
});

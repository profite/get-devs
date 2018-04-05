'use strict';
const
  gulp     = require("gulp"),
  uglify   = require("gulp-uglify"),
  concat   = require("gulp-concat"),
  less     = require("gulp-less"),
  cleanCSS = require('gulp-clean-css'),
  babel    = require('gulp-babel'),
  shell    = require('gulp-shell'),
  rename   = require("gulp-rename"),
  paths    = {
    less:       ['./desenv/less/**/*.less'],
    controller: ['./desenv/js/controllers/*.js'],
    service:    ['./desenv/js/services/*.js'],
    model:      ['./desenv/js/model/*.js'],
    boot:       ['./desenv/js/boot/*.js']
  };

gulp.task('less', () => {
  return gulp.src('./desenv/less/main.less')
         .pipe(less())
         .pipe(gulp.dest('./public/assets/css'));
});

gulp.task('angular', () => {
  return gulp.src(['./bower_components/angular/angular.min.js','./bower_components/angular-route/angular-route.min.js'])
      .pipe(concat('angular.min.js'))
      .pipe(gulp.dest('./public/assets/js'));
});

gulp.task('css', () => {
  return gulp.src(['./bower_components/normalize-css/normalize.css'])
         .pipe(cleanCSS())
         .pipe(gulp.dest('./public/assets/css'));
});

gulp.task('boot', () => {
  return gulp.src(paths.boot)
      .pipe(concat('boot.js'))
      .pipe(babel({presets: ['es2015']}))
      .pipe(gulp.dest('./desenv/temp'));
});

gulp.task('controller', () => {
  return gulp.src(paths.controller)
      .pipe(concat('controller.js'))
      .pipe(babel({presets: ['es2015']}))
      .pipe(gulp.dest('./desenv/temp'));
});

gulp.task('service', () => {
  return gulp.src(paths.service)
      .pipe(concat('service.js'))
      .pipe(babel({presets: ['es2015']}))
      .pipe(gulp.dest('./desenv/temp'));
});

gulp.task('model', () => {
  return gulp.src(paths.model)
      .pipe(concat('model.js'))
      .pipe(babel({presets: ['es2015']}))
      .pipe(gulp.dest('./desenv/temp'));
});

gulp.task('fetchApp', ['boot', 'model', 'service', 'controller'], () => {
  return gulp.src(['./desenv/temp/boot.js',
                   './desenv/temp/controller.js',
                   './desenv/temp/service.js',
                   './desenv/temp/model.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./public/assets/js'))
        .pipe(shell(['rm -r ./desenv/temp']));
});

gulp.task('buildJs', () => {
  return gulp.src('./public/assets/js/main.js')
          .pipe(uglify({mangle: false}))
          //.pipe(rename("main.min.js"))
          //.pipe(shell('rm ./public/assets/js/main.js'));
          .pipe(gulp.dest('./public/assets/js'))
});
gulp.task("buildCss", () => {
  return gulp.src('./public/assets/css/main.css')
          .pipe(cleanCSS())
          //.pipe(rename("main.min.css"))
          //.pipe(shell('rm ./public/assets/css/main.css'))
          .pipe(gulp.dest('./public/assets/css'));
});

gulp.task("build", ['buildJs', "buildCss"])

gulp.task('default', () => {
  gulp.watch(paths.less, ['less']);
  gulp.watch('./desenv/js/**/*.js', ["fetchApp"]);
});

var gulp     = require("gulp"),
    uglify   = require("gulp-uglify"),
    concat   = require("gulp-concat"),
    less     = require("gulp-less"),
    cleanCSS = require("gulp-clean-css"),
    clean    = require("gulp-clean"),
    connect  = require("gulp-connect"),
    paths    = {
        less: ['./less/**/*.less'],
        controller: ['./js/controller/*.js'],
        service:    ['./js/services/*.js'],
        model:      ['./js/models/*.js'],
        value:      ['.js/value/*.js'],
        config:     ['.js/config/*.js'],
        app:        ['./js/*.js']
    };

    gulp.task('clean', function () {
        return gulp.src('dist/')
            .pipe(clean());
    });

    gulp.task('less', function() {
        return gulp.src(['./less/*.less', './less/**/*.less'])
            .pipe(less())
            .pipe(concat('main.css'))
            .pipe(gulp.dest('./dist/css'));
    });

    gulp.task('fetchApp', function () {
        return gulp.src('./js/**/*.js')
            .pipe(concat('main.js'))
            .pipe(gulp.dest('./dist/js'))
    });

    gulp.task('buildJs', function () {
        return gulp.src('./dist/js/main.js')
            .pipe(uglify({mangle: false}))
            .pipe(gulp.dest('./dist/js'))
    });

    gulp.task("buildCss", function () {
        return gulp.src('./dist/css/main.css')
            .pipe(cleanCSS())
            .pipe(gulp.dest('./dist/css'));
    });

    gulp.task('webserver', function() {
        connect.server({
            livereload: true,
            port: 8000,
            host: '127.0.0.1'
        });
    });

    gulp.task("build", ['buildJs', "buildCss"]);

    gulp.task('default', ['less', 'fetchApp', 'webserver'],function () {
        gulp.watch(paths.less, ['less']);
        gulp.watch('./js/**/*.js', ["fetchApp"]);
    });


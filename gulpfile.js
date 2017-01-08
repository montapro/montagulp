/**
 * DEPENDENCIES
 */
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoPrefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');

paths = {
    srcStyles: './scss/',
    srcScripts: './js/',
    dist: '../dist'
};

gulp.task('styles', function () {
    gulp.src(paths.srcStyles + 'main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoPrefixer({
            browsers: ['> 0%'],
            cascade: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.dist));
});



gulp.task('scripts', function() {
    gulp.src(paths.srcScripts + 'main.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(paths.dist));
});



gulp.task('serve', function () {
    gulp.watch(paths.srcStyles + '*.scss', ['styles']);
    gulp.watch(paths.srcScripts + '*.js', ['scripts']);
});



gulp.task('default', ['styles', 'scripts', 'serve']);

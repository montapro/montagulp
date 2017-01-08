/**
 * DEPENDENCIES
 */
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoPrefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
// const browserSync = require('browser-sync');



gulp.task('styles', function () {
    gulp.src('./src/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoPrefixer({
            browsers: ['> 0%'],
            cascade: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist'))
        // .pipe(browserSync.reload({stream: true}));
});



gulp.task('scripts', function() {
    gulp.src('./src/js/main.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./dist'));
});



gulp.task('serve', function () {
    // browserSync.init({
    //     server: {
    //         baseDir: './',
    //         proxy: 'http://ambicon:8888'
    //     }
    // });
    gulp.watch('./src/scss/*.scss', ['styles']);
    gulp.watch('./src/js/*.js', ['scripts']);
    // gulp.watch('./**/*.html').on('change', browserSync.reload);
    // gulp.watch('./**/*.php').on('change', browserSync.reload);
});



gulp.task('default', ['styles', 'scripts', 'serve']);

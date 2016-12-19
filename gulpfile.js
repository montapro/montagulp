/**
 * DEPENDENCIES
 */
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const autoPrefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');



gulp.task('styles', function () {
    gulp.src('./src/scss/main.scss')
        .pipe(sass())
        .pipe(autoPrefixer({
            browsers: ['> 0%'],
            cascade: true
        }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.reload({stream: true}));
});



gulp.task('scripts', function() {
    gulp.src('./src/js/main.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./dist/js'));
});



gulp.task('serve', function () {
    // browserSync.init({
    //     server: {
    //         // baseDir: './../../',
    //         proxy: 'http://ambicon'
    //     }
    // });
    gulp.watch('./src/scss/*.scss', ['styles']);
    gulp.watch('./src/js/*.js', ['scripts']);
    gulp.watch('./**/*.html').on('change', browserSync.reload);
    gulp.watch('./**/*.php').on('change', browserSync.reload);
});



gulp.task('default', ['styles', 'scripts', 'serve']);

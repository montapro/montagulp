/**
 * DEPENDENCIES
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var autoPrefixer = require('gulp-autoprefixer');



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



gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./src/scss/*.scss', ['styles']);
    gulp.watch('./**/*.html').on('change', browserSync.reload);
    gulp.watch('./**/*.php').on('change', browserSync.reload);
});



gulp.task('default', ['styles', 'serve']);

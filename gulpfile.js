var gulp = require('gulp');
var sass = require('gulp-sass');



var srcFiles = {
    styles: './scss/*.scss'
};

var distFolders = {
    styles: './css/'
};



gulp.task('styles', function () {
    return gulp.src(srcFiles.styles)
        .pipe(sass())
        .pipe(gulp.dest(distFolders.styles));
});



gulp.task('watch', function () {
    gulp.watch(srcFiles.styles, ['styles']);
});

gulp.task('default', ['styles']);

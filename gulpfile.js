var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function () {
    return gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

// gulp.task('scripts', function() {
//     gulp.src(source_files.vendor_scripts)
//         .pipe(debug({title: "vendor-scripts"}))
//         .pipe(vendor('vendor.js'))
//         .pipe(gulp.dest(dist_folders.scripts));
//
//     return gulp.src(source_files.scripts)
//         .pipe(debug({title: "scripts"}))
//         .pipe(ignore('_*.js'))
//         .pipe(include())
//         .pipe(plumber())
//         .pipe(gulp.dest(dist_folders.scripts));
// });

gulp.task('watch', function () {
    gulp.watch('./scss/*scss', ['styles']);
});

gulp.task('default', ['styles']);

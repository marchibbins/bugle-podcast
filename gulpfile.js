var gulp = require('gulp');
var postcss = require('gulp-postcss');

gulp.task('css', function () {
    return gulp.src('./src/**/*.css')
        .pipe(postcss([ require('precss')]))
        .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.css', ['css']);
});

gulp.task('default', ['css']);

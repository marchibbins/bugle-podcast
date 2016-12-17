var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var postCss = require('gulp-postcss');
var postCssImport = require('postcss-import');
var postCssPre = require('precss');

gulp.task('css', function () {
    return gulp.src('./src/css/index.css')
    .pipe(postCss([
      postCssImport(),
      postCssPre(),
      autoprefixer(),
    ]))
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.css', ['css']);
});

gulp.task('default', ['css']);

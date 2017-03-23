var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');

gulp.task('sass', function () {
  gulp.src('./css/scss/*.scss')
        .pipe(sass())
        .pipe(minifycss())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
  gulp.watch('./css/scss/**/*.scss', ['sass']);
});

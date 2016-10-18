var gulp = require('gulp');

var sass = require('gulp-sass');

var rename = require('gulp-rename');

gulp.task('scss', function () {
  gulp.src('./**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename(function (path) {
      path.extname = '.wxss';
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  gulp.watch('./pages/**/*', ['scss']);
  gulp.watch('./*.scss', ['scss']);
});

gulp.task('tpls', function () {
  gulp.watch('./tpls/**/*', ['scss']);
  gulp.watch('./*.scss', ['scss']);
});

gulp.task('default', ['watch','tpls'], function () {
  console.log('done!');
});

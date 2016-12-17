var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('inline-css', function() {
  gulp.src(['_sass/inline.scss'])
    .pipe($.sass())
    .pipe($.uncss({
      html: ['_site/**/*.html']
    }))
    .pipe($.cssnano())
    .pipe(gulp.dest('_includes/'))
});
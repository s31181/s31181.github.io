'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const browserSync =require('browser-sync').create();
const reload = browserSync.reload();

gulp.task('default', ['browserSync'], function() {
  gulp.watch('sass/*.scss', ['sass']);
  gulp.watch('*.html', ['reload']);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir:'./'
    }
  });
});

gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream());
});

gulp.task('reload', function() {
  return gulp.src('./*.html')
  .pipe(browserSync.stream());
});

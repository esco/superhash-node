var gulp = require('gulp');
var jshint = require('gulp-jshint');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha');

var paths = {
  scripts: ['*.js'],
  tests: ['test/*.js']
};

gulp.task('lint', function(){
  return gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('test', function(){
  return gulp.src(paths.scripts)
    .pipe(istanbul())
    .on('finish', function(){
      gulp.src(paths.tests)
        .pipe(mocha())
        .pipe(istanbul.writeReports());
    });
});

gulp.task('watch', function(){
  gulp.watch(paths.scripts, ['lint', 'test']);
});
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
$ = require('gulp-load-plugins')();
var historyApiFallback = require('connect-history-api-fallback');

var angularFilesort = require('gulp-angular-filesort'),
  inject = require('gulp-inject'),
  naturalSort = require('gulp-natural-sort'),
  bowerFiles = require('main-bower-files'),
  es = require('event-stream');

gulp.task('clean', function () {
  return gulp.src('dist/')
    .pipe($.clean());
});

gulp.task('copy', ['clean'], function () {
  gulp.src(['**', '!index*.html*', '!js/**', '!lib/**', '!**/*.css'], {cwd: 'app/'})
    .pipe(gulp.dest('dist/.'));
});

gulp.task('dist', ['inject', 'copy'], function () {
  return gulp.src('app/index.html')
    .pipe($.usemin({
      css: [$.cleanCss(), $.rev()],
      js: [$.uglify(), $.rev()]
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('serve', ['inject'], function () {

  browserSync.init({
    server: {
      baseDir: './app',
      middleware: [historyApiFallback()]
    }
  });

  gulp.watch(['app/**/*.js', 'app/**/*.css', 'app/**/*.html'])
    .on('change', browserSync.reload);
});

gulp.task('inject', function () {
  return gulp.src('app/index.html')
    .pipe(inject(gulp.src(bowerFiles(), {read: false}), {
      name: 'bower',
      relative: true
    }))
    .pipe(inject(es.merge(
      gulp.src(['app/**/*.css', '!app/bower_components/**'], {read: false}),
      gulp.src(['app/**/*.js', '!app/bower_components/**', '!app/**/*_test.js'])
        .pipe(naturalSort())
        .pipe(angularFilesort())
    ), {relative: true}))
    .pipe(gulp.dest('app'));
});

// Tell Gulp what to do when we type "gulp" into the terminal
gulp.task('default', ['serve']);

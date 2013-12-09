var lr      = require('tiny-lr'),
    gulp    = require('gulp'),
    refresh = require('gulp-livereload'),
    server  = lr(),
    spawn   = require('child_process').spawn,
    jshint  = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    path    = require('path');

gulp.task('scripts:dev', function () {
  gulp.src('./app/js/**/*.js')
    // .pipe(jshint())
    .pipe(refresh(server));
});

gulp.task('watch', function () {
  server.listen(35729, function (err) {
    if (err) return console.log(err);

    gulp.watch('app/js/**/*.js', function (e) {
      gulp.run('jshint','scripts:dev');
    });
  });
});

gulp.task('server', function(){
  spawn('node', ['server'], {stdio: 'inherit'});
  gulp.run('watch');
});

gulp.task('jshint', function(){
  spawn('jshint', ['app/js/', '--reporter=' + stylish], {stdio: 'inherit'});
  // gulp.pipe(refresh(server));
});


var ftp = require('vinyl-ftp');
var gulp = require('gulp');
var gutil = require('gulp-util');
var minimist = require('minimist');
var args = minimist(process.argv.slice(2));

gulp.task('deploy', function() {
  var remotePath = '/site/';
  var conn = ftp.create({
    host: args.site,
    user: args.user,
    password: args.password,
    log: gutil.log
  });
  gulp
    .src(['dist/*.*'])
    .pipe(conn.newer(remotePath))
    .pipe(conn.dest(remotePath));
});

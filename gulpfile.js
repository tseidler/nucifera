var ftp = require('vinyl-ftp');
var gulp = require('gulp');
var fancylog = require('fancy-log');
var minimist = require('minimist');
var args = minimist(process.argv.slice(2));

gulp.task('deploy', function() {
  var remotePath = '/';
  var conn = ftp.create({
    host: args.site,
    user: args.user,
    password: args.password,
    log: fancylog
  });
  gulp
    .src(['dist/*.*'])
    .pipe(conn.newer(remotePath))
    .pipe(conn.dest(remotePath));
});

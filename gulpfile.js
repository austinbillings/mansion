var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');

var source = './src/mansion.less';
var outputDir = './dist';

gulp.task('build', function () {
  return gulp.src(source)
    .pipe(less({
      paths: [ path.join(__dirname, 'src') ]
    }))
    .pipe(gulp.dest(outputDir));
});

gulp.task('default', ['build']);

const gulp = require('gulp');
const path = require('path');
const less = require('gulp-less');
const concat = require('gulp-concat');
const uglify = require('gulp-uglifycss');

const source = './src/mansion.less';
const outputDir = './dist';

gulp.task('build', function () {
  gulp.src(source)
    .pipe(less({
      paths: [ path.join(__dirname, 'src') ]
    }))
    .pipe(gulp.dest(outputDir));
  gulp.src(source)
    .pipe(less({
      paths: [ path.join(__dirname, 'src') ]
    }))
    .pipe(concat('mansion.min.css'))
    .pipe(uglify({
      uglyComments: true
    }))
    .pipe(gulp.dest(outputDir));
});

gulp.task('default', ['build']);

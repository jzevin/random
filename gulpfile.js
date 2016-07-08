var gulp = require('gulp'),
    combiner = require('stream-combiner2'),
    typescript = require('gulp-typescript'),
    minifyJs = require('gulp-minify'),
    rename = require('gulp-rename'),
    gutil = require('gulp-util');

gulp.task('build', function() {
  var combined = combiner.obj([
    gulp.src('./src/random.ts'),
    typescript(),
    gulp.dest('./build/'),
    minifyJs({
      ext : {
        min: '.min.js'
      }
    }),
    //rename({extname: '.min.js'}),
    gulp.dest('./build/')
  ]);
  combined.on( 'error', gutil.log);
  return combined;
});


gulp.task( 'watch', function() {
  gulp.watch('./src/random.ts', ['build']);
  return;
});

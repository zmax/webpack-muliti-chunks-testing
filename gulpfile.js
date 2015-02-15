var gulp = require('gulp');
var webpack = require('gulp-webpack');

var dist = 'public';

gulp.task('default', ['webpack']);

gulp.task('webpack', function() {
    return gulp.src('app/index.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest(dist+'/js'));
});

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');


gulp.task('styles', function() {

    gulp.src('./src/css/style.scss')
        .pipe(sass({
            errLogToConsole: true

        }))

        .pipe(autoprefixer(
            {
                browsers: [
                    'last 2 versions',
                    'IE >= 9'
                ],
                cascade: false
            }
        ))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./build/css/'))
});

gulp.task('scripts', function() {
    gulp.src(['./src/js/lib.js','./src/js/**/*.js'])
        .pipe(concat('script.min.js'))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest('./build/js/'));
});


//Watch task
gulp.task('default',function() {
    //livereload.listen();
    gulp.watch('src/css/*.scss',['styles','scripts']);
});
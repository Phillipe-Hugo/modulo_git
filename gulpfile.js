const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');


gulp.task('sass', function() {
  return gulp.src('src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});


gulp.task('imagemin', function() {
  return gulp.src('img/bird-ga5d9ed257_1920.jpg.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});


gulp.task('uglify', function() {
  return gulp.src('src/Js/arquivo1.js','src/Js/arquiv2.js' )
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});


gulp.task('build', gulp.parallel('sass', 'imagemin', 'uglify'));


gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('img/**/*.jpg', gulp.series('imagemin'));
  gulp.watch('src/js/**/*.js', gulp.series('uglify'));
});
const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');


gulp.task('sass', function() {
  return gulp.src('./source/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('/build/images/'));
});


gulp.task('imagemin', function() {
  return gulp.src('img/bird-ga5d9ed257_1920.jpg.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images'));
});


gulp.task('uglify', function() {
  return gulp.src('src/Js/arquivo1.js','src/Js/arquiv2.js' )
    .pipe(uglify())
    .pipe(gulp.dest('./Js/arquivo1.js'));
});


gulp.task('build', gulp.parallel('sass', 'imagemin', 'uglify'));


gulp.task('watch', function() {
  gulp.watch('./source/styles/main.scss', gulp.series('sass'));
  gulp.watch('img/birds-g6b63afc7a_1920.jpg', gulp.series('imagemin'));
  gulp.watch('./Js/arquivo2.js', gulp.series('uglify'));
});
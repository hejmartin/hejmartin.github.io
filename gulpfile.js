const gulp = require('gulp')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const sourcemaps = require('gulp-sourcemaps')

const css = './src/style.css'

gulp.task('css', () => {
   return gulp.src(css)
      .pipe(sourcemaps.init())
      .pipe(postcss([ autoprefixer() ]))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./dist'))
})

gulp.task('watch', () => {
   gulp.watch(css, ['css']);
})
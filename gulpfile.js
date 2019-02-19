let gulp = require('gulp'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    del = require('del');

const path = {
    js: {
        src: 'src/js/**/*.js',
        dest: 'dist/js'
    },
    scss: {
        src: 'src/scss/**/*.js',
        dest: 'dist/css'
    }
};

// small tasks
gulp.task('clean', () => {
    del(['dist', 'target'])
});

gulp.task('build-js', () => {
    return gulp.src(path.js.src, { sourcemaps: true})
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest(path.js.dest));
});

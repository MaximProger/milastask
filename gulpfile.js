let gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();


function css_style(done) {

    gulp.src('./scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        errorLogToConsole: true,
        outputStyle: 'compressed'
    }))
    .on('error', console.error.bind(console))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream());

    done();
}

function sync(done) {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 3000
    });

    done();
}

function browserReload(done) {
    browserSync.reload();

    done();
}

function watchFiles() {
    gulp.watch('./scss/**/*.scss', css_style);
    gulp.watch('./**/*.html', browserReload);
    gulp.watch('./**/*.php', browserReload);
    gulp.watch('./**/*.js', browserReload);
}


gulp.task('default', gulp.parallel(sync, watchFiles));
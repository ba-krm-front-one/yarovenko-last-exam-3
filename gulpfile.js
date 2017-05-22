const gulp = require('gulp'); // Подключение гульпа
const postcss = require('gulp-postcss'); // Подключение PostCSS
const sourcemaps = require('gulp-sourcemaps');// Подключение Sourcemaps https://www.npmjs.com/package/gulp-sourcemaps
    const autoprefixer = require('autoprefixer');// Подключение Autoprefixer https://github.com/postcss/autoprefixer
const cssnext = require('cssnext');// Подключение postcss-cssnext http://cssnext.io/
const cssnano = require('cssnano');// Подключение минификатора http://cssnano.co/


/**
 * Это описание задачи, которая будет переносить наш CSSиз исходников в папку dist и при этом добавлять браузерные префиксы и мапы
 * @returns {*}
 */
let publishCssAndAddBrowserPrefixes = () => {
    let processors = [
        autoprefixer({
            remove: false, // указываем, что не нужно насильно удалять префиксы из нашего кода
            browsers: ['last 10 version'], // можем указать, какие браузеры поддерживать
        }),
        cssnext,
        cssnano,
    ];
    return gulp.src('src/stylesheet/**/*.css')
    .pipe(sourcemaps.init())
       .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./docs/stylesheet'));
};

/**
 * Тут мы регистрируем нашу вышеописанную задачу в гульпе
 */
gulp.task('publish-css', () => {
    return publishCssAndAddBrowserPrefixes()
});
/**
 * Тут мы добавляем файл вотчер, который будет запускать publishCssAndAddBrowserPrefixes задачу при изменении css файлов
 */
gulp.task('watch', () => {
    return gulp.watch([' src/**/*.css'], publishCssAndAddBrowserPrefixes)
});

/**
 * Тут мы регистрируем нашу вышеописанную задачу в гульпе
 */
gulp.task('publish-flickity', () => {
    return gulp.src('./node_modules/flickity/dist/flickity.pkgd.min.js')
        .pipe(gulp.dest('./docs/lib/'));
});
gulp.task('publish-smooth', () => {
    return gulp.src('./src/lib/smooth-scroll.js')
        .pipe(gulp.dest('./docs/lib/'));
});
gulp.task('publish-font', () => {
    return gulp.src('./src/fonts/*.css')
        .pipe(gulp.dest('./docs/fonts/'));
});
gulp.task('publish-scripts', () => {
    return gulp.src('./src/scripts/*.js')
        .pipe(gulp.dest('./docs/scripts/'));
});
    gulp.task('publish-index-file-and-favico-and-package', () => {
    return gulp.src('./*.*')
        .pipe(gulp.dest('./docs'));
});

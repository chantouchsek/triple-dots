const gulp = require('gulp'),
    terser = require('gulp-terser'),
    typescript = require('gulp-typescript'),
    rename = require('gulp-rename'),
    replace = require('gulp-replace');

const transpile = (target, module) => {
    return (
        gulp
            .src('src/*.ts')

            // First, we transpile back to JS.
            .pipe(
                typescript({
                    target,
                    module,
                })
            )

            // Next, uglify it.
            .pipe(
                terser({
                    output: {
                        comments: '/^!/',
                    },
                })
            )
    );
};

/** Save plugin to be used with UMD pattern. */
const jsUMD = (cb) => {
    return transpile('es5', 'umd')
        .pipe(rename('triple-dots.umd.js'))
        .pipe(gulp.dest('dist'));
};

/** Save plugin to be used as an ES6 module. */
const jsES6 = (cb) => {
    return transpile('es6', 'es6')
        .pipe(rename('triple-dots.es6.js'))
        .pipe(gulp.dest('dist'));
};

/** Save plugin to be used with bundlers that support the pkg.module definition. */
const jsESM = (cb) => {
    return transpile('es5', 'es6')
        .pipe(rename('triple-dots.esm.js'))
        .pipe(gulp.dest('dist'));
};

/** Save plugin to be used without UMD pattern or ES6 module. */
const js = (cb) => {
    return gulp
        .src('dist/triple-dots.esm.js')
        .pipe(rename('triple-dots.js'))
        .pipe(replace('export default TripleDots;', ''))
        .pipe(gulp.dest('dist'));
};

const types = (cb) => {
    return gulp
        .src('src/*.ts')
        .pipe(typescript({ declaration: true }))
        .dts.pipe(gulp.dest('dist'));
};

const defaultTask = gulp.parallel(jsUMD, gulp.series(jsESM, js), jsES6, types);
exports.default = defaultTask;

// Watch task 'gulp watch': Starts a watch on JS tasks
const watch = (cb) => {
    gulp.watch(
        'src/*.ts',
        gulp.parallel(jsUMD, gulp.series(jsESM, js), jsES6, types)
    );
    cb();
};
exports.watch = watch;

const autoprefixer = require('gulp-autoprefixer');
const babelify = require('babelify');
const browserify = require('browserify');
const browserSync = require('browser-sync').create();
const buffer = require('vinyl-buffer');
const chalk = require('chalk');
const concat = require('gulp-concat');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const minify = require('gulp-clean-css');
const plugins = require('gulp-load-plugins');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify-es').default;

const assetsDir = '';
const paths = {
  src: {
    images: `${assetsDir}src/img/**/**.{gif,jpeg,jpg,png,svg}`,
    scripts: `${assetsDir}src/js/app.js`,
    styles: `${assetsDir}src/css/**.{css,scss}`,
  },
  watch: {
    images: [
      `${assetsDir}src/img/**/**.{gif,jpeg,jpg,png,svg}`,
    ],
    scripts: [
      `${assetsDir}src/js/**/**.{coffee,js,jsx}`,
    ],
    styles: [
      `${assetsDir}src/css/**/**.{css,scss}`,
    ],
  },
  dest: {
    images: `${assetsDir}dist/img`,
    scripts: `${assetsDir}dist/js`,
    styles: `${assetsDir}dist/css`,
  },
};

// Private Functions
// ----------------------------------------------------------------------------
function logError(...args) {
  plugins().notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>',
  }).apply(this, args);

  this.emit('end');
}

// BrowserSync reload helper function
function reload() {
  browserSync.reload();
}

function bundleApp() {
  // Browserify will bundle all our js files together in to one and will let
  // us use modules in the front end.
  const appBundler = browserify({
    entries: paths.src.scripts,
    debug: true,
  });

  appBundler
    // transform ES6 and JSX to ES5 with babelify
    .transform('babelify', {
      presets: ['es2015']
    })
    .bundle()
    .on('error', logError)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(paths.dest.scripts))
    .pipe(buffer())
    .pipe(rename('bundle.min.js'))
    .pipe(uglify().on('error', (e) => {
      console.log(e);
    }))
    .pipe(gulp.dest(paths.dest.scripts))
    .pipe(plugins().sourcemaps.init({
      loadMaps: true,
    }))
    .pipe(plugins().sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dest.scripts))
    .on('end', () => {
      console.log(chalk.white.bgGreen.bold('bundleApp: Complete'));
    });
}

function bundleImages() {
  return gulp.src(paths.src.images)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.dest.images)).on('end', reload);
}

exports.bundleImages = bundleImages;

function bundleStyles() {
  return gulp.src(paths.src.styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.dest.styles))
    .pipe(autoprefixer({
      browsers: ['last 4 versions'],
      cascade: false,
    }))
    .pipe(concat('app.css'))
    .pipe(gulp.dest(paths.dest.styles))
    .pipe(minify({
      keepBreaks: true,
    }))
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(gulp.dest(paths.dest.styles))
    .on('end', () => {
      console.log(chalk.white.bgGreen.bold('bundleStyles: Complete'));
    });
}

// Gulp tasks
// ----------------------------------------------------------------------------
gulp.task('images', () => {
  bundleImages();
});

gulp.task('reload', () => {
  reload();
});

gulp.task('scripts', () => {
  bundleApp();
});

gulp.task('styles', () => {
  bundleStyles();
});

gulp.task('watch', () => {
  browserSync.init(['*.htm*', 'dist/**/**.*'], {
    server: {
      baseDir: './'
    },
    notify: false,
  });
  gulp.watch(paths.watch.images, ['images', 'reload']);
  gulp.watch(paths.watch.scripts, ['scripts', 'reload']);
  gulp.watch(paths.watch.styles, ['styles', 'reload']);
});

gulp.task('default', ['watch', 'images', 'scripts', 'styles', 'reload']);
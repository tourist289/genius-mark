'use strict';

const gulp     = require('gulp'),
  autoPreFixer = require('autoprefixer'),
  cssnano      = require("cssnano"),
  postcss      = require("gulp-postcss"),
  sass         = require('gulp-sass'),
  plumber      = require("gulp-plumber"),
  browserSync  = require('browser-sync').create();

const browserIfy = require('browserify'),
  babelIfy       = require('babelify'),
  source         = require('vinyl-source-stream'),
  buffer         = require('vinyl-buffer'),
  uglIfy         = require('gulp-uglifyjs'),
  sourceMaps     = require('gulp-sourcemaps');

const paths = {
  style: {
    src: 'src/sass/main.{sass,scss}',
    watch: 'src/sass/**/*.{sass,scss}',
    to: 'dist/css/'
  },
  js: {
    src: 'src/js/main.js',
    all: 'src/js/**/*.js',
    to: 'dist/js/'
  }
};

// BrowserSync
function browserServer(done) {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    //proxy: "http://name.loc/", // for wp and osp
    open: true,
    port: 3033
  });
  done();
}

// BrowserSync Reload
function browserServerReload(done) {
  browserSync.reload();
  done();
}

// Scss stylesheets
function css() {
  return gulp
    .src( paths.style.src )
    .pipe(plumber())
    .pipe(sourceMaps.init())
    .pipe( sass({
      outputStyle: 'compressed'
    })).on( 'error', sass.logError )
    //.pipe( postcss([autoPreFixer(), cssnano()]) )
    .pipe( postcss([autoPreFixer()]) )
    .pipe(sourceMaps.write('./maps'))
    .pipe( gulp.dest( paths.style.to ) )
    .pipe( browserSync.stream() );
}

// JS
function scripts() {
  return browserIfy({
    entries: paths.js.src,
    debug: true
  })
    .transform( babelIfy, {
      presets:[
        ["@babel/preset-env"]
      ]
    })
    .bundle()
    .pipe( source('app.js') )
    .pipe( buffer() )
    //.pipe(sourceMaps.init())
    //.pipe(uglIfy())
    //.pipe(sourceMaps.write('./maps'))
    .pipe( gulp.dest( paths.js.to ) )
    .pipe( browserSync.stream() );
}

// watch
function watchFiles() {
  gulp.watch(paths.style.watch, css);
  gulp.watch('**/*.html', browserServerReload);
  gulp.watch(paths.js.all , scripts);
}

// define complex tasks
const js = gulp.series(scripts, browserServerReload);
const server = gulp.series( gulp.parallel(browserServer, watchFiles) );
const watch = gulp.series(watchFiles);

// export tasks
exports.css = css;
exports.js = js;
exports.server = server;
exports.default = watch;

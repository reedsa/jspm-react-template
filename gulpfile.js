var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var path = {
  HTML: 'src/index.html',
  CSS: 'src/css/*.css',
  JS: ['src/js/*.js', 'src/js/**/*.js'],
  JSPM_CONFIG: ['src/config.js'],
  JSPM_PACKAGES: ['src/jspm_packages/**'],
  ALL: ['src/config.js', 'jspm_packages', 'src/js/*.js', 'src/js/**/*.js', 'src/index.html', 'src/css/*.css'],
  BUILD: 'build',
  BUILD_CSS: 'build/css',
  BUILD_JS: 'build/js',
  BUILD_JSPM: 'build/jspm_packages'
};

gulp.task('lint', function() {
  return gulp.src(path.JS)
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format())
    .pipe(plugins.eslint.failOnError());
});

gulp.task('jsx', function(){
  gulp.src(path.JS)
    .pipe(plugins.react({es6module: true}))
    .pipe(gulp.dest(path.BUILD_JS));
});

gulp.task('copy_html', function(){
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.BUILD));
});

gulp.task('copy_jspm_config', function(){
  gulp.src(path.JSPM_CONFIG)
    .pipe(gulp.dest(path.BUILD));
});

gulp.task('copy_jspm_packages', function(){
  gulp.src(path.JSPM_PACKAGES)
    .pipe(gulp.dest(path.BUILD_JSPM));
});

gulp.task('build', ['copy_html', 'jsx',
                    'copy_jspm_config', 'copy_jspm_packages']);

gulp.task('watch', function(){
  gulp.watch(path.ALL, ['lint', 'build']);
});

gulp.task('default', ['lint', 'build', 'watch']);

gulp.task('bundle', plugins.shell.task([
  'jspm bundle-sfx js/main dist/main.js'
]));

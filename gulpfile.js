'use strict';

const gulp = require('gulp');
const rigger = require('gulp-rigger');  // позволяет поддерживать конструкции вида: //= template.html

const path = {
  src: {
    html: 'src/*.html',
    css: 'src/css/*.css',
    js: 'src/js/*.js',
    img: 'src/img/**/*.*'
  },
  build: {
    html: 'build/',
    css: 'src/style/',
    js: 'src/script/',
    img: 'src/images/'
  }
}

gulp.task('html:build', () => 
  gulp.src(path.src.html)               // выберем файлы по нужному пути
    .pipe(rigger())                     // прогоним через rigger
    .pipe(gulp.dest(path.build.html))   // выплюнем их в папку build
    // .pipe(reload({stream: true}))    // и перезагрузим наш сервер для обновлений
);

gulp.task('css:build', () => 
  gulp.src(path.src.css)
    .pipe(gulp.dest(path.build.css))
);

gulp.task('default', 
  gulp.series(
    'html:build',
    'css:build'
  )
);


// var gulp = require('gulp'),
//     watch = require('gulp-watch'),
//     prefixer = require('gulp-autoprefixer'),
//     uglify = require('gulp-uglify'),
//     sass = require('gulp-sass'),
//     sourcemaps = require('gulp-sourcemaps'),
//     rigger = require('gulp-rigger'),
//     cssmin = require('gulp-minify-css'),
//     imagemin = require('gulp-imagemin'),
//     pngquant = require('imagemin-pngquant'),
//     rimraf = require('rimraf'),
//     browserSync = require("browser-sync"),
//     reload = browserSync.reload;


// gulp.task('js:build', function () {
//   gulp.src(path.src.js) //Найдем наш main файл
//       .pipe(rigger()) //Прогоним через rigger
//       .pipe(sourcemaps.init()) //Инициализируем sourcemap
//       .pipe(uglify()) //Сожмем наш js
//       .pipe(sourcemaps.write()) //Пропишем карты
//       .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
//       .pipe(reload({stream: true})); //И перезагрузим сервер
// });

/*
 * Third party
 */
//= ../../bower_components/jquery/dist/jquery.js


/*
 * Custom
 */
//= partials/app.js



// gulp.task('style:build', function () {
//   gulp.src(path.src.style) //Выберем наш main.scss
//       .pipe(sourcemaps.init()) //То же самое что и с js
//       .pipe(sass()) //Скомпилируем
//       .pipe(prefixer()) //Добавим вендорные префиксы
//       .pipe(cssmin()) //Сожмем
//       .pipe(sourcemaps.write())
//       .pipe(gulp.dest(path.build.css)) //И в build
//       .pipe(reload({stream: true}));
// });

/*
* Third Party
*/
// @import "../../bower_components/normalize.css/normalize.css";

/*
* Custom
*/
// @import "partials/app";


// gulp.task('image:build', function () {
//   gulp.src(path.src.img) //Выберем наши картинки
//       .pipe(imagemin({ //Сожмем их
//           progressive: true,
//           svgoPlugins: [{removeViewBox: false}],
//           use: [pngquant()],
//           interlaced: true
//       }))
//       .pipe(gulp.dest(path.build.img)) //И бросим в build
//       .pipe(reload({stream: true}));
// });



// gulp.task('fonts:build', function() {
//   gulp.src(path.src.fonts)
//       .pipe(gulp.dest(path.build.fonts))
// });


// gulp.task('watch', function(){
//   watch([path.watch.html], function(event, cb) {
//       gulp.start('html:build');
//   });
//   watch([path.watch.style], function(event, cb) {
//       gulp.start('style:build');
//   });
//   watch([path.watch.js], function(event, cb) {
//       gulp.start('js:build');
//   });
//   watch([path.watch.img], function(event, cb) {
//       gulp.start('image:build');
//   });
//   watch([path.watch.fonts], function(event, cb) {
//       gulp.start('fonts:build');
//   });
// });



// gulp.task('clean', function (cb) {
//   rimraf(path.clean, cb);
// });


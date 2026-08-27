import webp from 'gulp-webp';
import avif from 'gulp-avif';
import imagemin from 'gulp-imagemin';

export const convertToAvif = () => {
  return app.gulp.src(app.path.source.images, { encoding: false })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'IMAGES: AVIF',
        message: 'Error: <%= error.message %>'
      })
    ))
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(app.plugins.if(app, avif({ quality: 80 })))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream());
};
// 2. Задача для ковертации (Webp)
export const convertToWebp = () => {
  return app.gulp.src(app.path.source.images, { encoding: false })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'IMAGES: WEBP',
        message: 'Error: <%= error.message %>'
      })
    ))
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(app.plugins.if(app, webp({ quality: 80 })))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream());
};

export const optimizeRaster = () => {
  return app.gulp.src(app.path.source.images, { encoding: false })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'IMAGES: RASTER',
        message: 'Error: <%= error.message %>'
      })
    ))
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(app.plugins.if(app, imagemin({
      progressive: true,
      interlaced: true,
      optimizationLevel: 3
    })))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream());
};

export const copySvg = () => {
  return app.gulp.src(app.path.source.svg)
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream());
};


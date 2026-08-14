export const copyFiles = () => {
  return app.gulp.src(app.path.source.files)
    .pipe(app.gulp.dest(app.path.build.files))
    .pipe(app.plugins.browsersync.stream());
}

export const copyVideo = () => {
  return app.gulp.src(app.path.source.video)
    .pipe(app.gulp.dest(app.path.build.video))
    .pipe(app.plugins.browsersync.stream());
}

export const copyManifest = () => {
  return app.gulp.src(app.path.source.manifest)
    .pipe(app.gulp.dest(app.path.build.manifest))
    .pipe(app.plugins.browsersync.stream());
}

export const copyfavicon = () => {
  return app.gulp.src(app.path.source.favicon)
    .pipe(app.gulp.dest(app.path.build.favicon))
    .pipe(app.plugins.browsersync.stream());
}


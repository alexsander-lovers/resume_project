import fileInclude from 'gulp-file-include';
// import webpHtmlNosvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';
import minHtml from 'gulp-html-minifier';

export const html = () => {
  return app.gulp.src(app.path.source.html)
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: 'HTML',
      message: 'Error: <%= error.message %>'
    })
  ))
  .pipe(fileInclude())
  // .pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
  .pipe(app.plugins.if(app.isBuild, versionNumber({
      'value': '%DT%',
      'append': {
        'key': '_v',
        'cover': 0,
        'to': [
          'css', 'js'
        ]
      },
      'output': {
        'file': 'gulp/version.json'
      }
  })))
  .pipe(minHtml({ collapseWhitespace : true }))
  .pipe(app.gulp.dest(app.path.build.html))
  .pipe(app.plugins.browsersync.stream())
};

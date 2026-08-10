import gulp from 'gulp';

import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { convertToAvif, convertToWebp, optimizeRaster, copySvg } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff2 } from "./gulp/tasks/fonts.js";
import { svgSprit } from "./gulp/tasks/svgSprite.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";

export { svgSprit };

global.app = {
  isBuild: process.argv.includes('--build'),
  isdev: !process.argv.includes('--build'),
  path: path,
  gulp: gulp,
  plugins: plugins
};

const images = gulp.parallel(convertToAvif, convertToWebp, optimizeRaster, copySvg);
const font = gulp.series(otfToTtf, ttfToWoff2);

function watcher () {
  gulp.watch(path.watch.files, gulp.series(copy)); /*, ftp */
  gulp.watch(path.watch.html, gulp.series(html));/*, ftp */
  gulp.watch(path.watch.scss, gulp.series(scss));/*, ftp */
  gulp.watch(path.watch.js, gulp.series(js));/*, ftp */
  gulp.watch(path.watch.images, gulp.series(images));/*, ftp */
}

const mainTasks = gulp.series(font, gulp.parallel(copy, html, scss, js, images));

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

export { dev, build, deployZIP, deployFTP };

gulp.task('default', dev);

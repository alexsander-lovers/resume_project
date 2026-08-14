import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./${rootFolder}`;
const srcFolder = `./source`

export const path = {
  build: {
    fonts: `${buildFolder}/fonts/`,
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/images/`,
    files: `${buildFolder}/files/`,
    video: `${buildFolder}/video/`,
    manifest: `${buildFolder}/`,
    favicon: `${buildFolder}/`
  },
  source: {
    js: `${srcFolder}/js/app.js`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,avif}`,
    svg: `${srcFolder}/images/**/*.svg`,
    svgicons: `${srcFolder}/svgicons/*.svg`,
    files: `${srcFolder}/files/**/*.*`,
    video: `${srcFolder}/video/**/*.mp4`,
    manifest: `${srcFolder}/*.webmanifest`,
    favicon: `${srcFolder}/*.ico`

  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp,avif}`,
    files: `${srcFolder}/files/**/*.*`,
    video: `${srcFolder}/video/**/*..mp4`,
    manifest: `${srcFolder}/**/*.webmanifest`,
    favicon: `${srcFolder}/**/*.ico`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: `test`
}

const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const cleanCSS = require("gulp-clean-css");

gulp.task("minify-html", () => {
  return gulp
    .src("index.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"));
});

gulp.task("minify-css", () => {
  return gulp
    .src("css/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist/css"));
});

gulp.task("default", gulp.series("minify-html", "minify-css"));

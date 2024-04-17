const gulp = require("gulp")
const {task} = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const sourcemaps = require("gulp-sourcemaps")

task("sass", ()=>{
    return gulp.src("src/styles/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: "compressed"}))
    .pipe(sourcemaps.write("map"))
    .pipe(gulp.dest("build/styles"))
})

task("default", ()=>{
    return gulp.watch("src/styles/*.scss", {ignoreInitial: false}, gulp.series("sass"))
})

var 		gulp = require("gulp"), 
	 connect = require("gulp-connect"),
 	  uglify = require("gulp-uglify");
  
gulp.task("refreshHTML",function(){
	gulp.src("./*.html").pipe(connect.reload());
});

// 打包js
gulp.task("js",function(){
	gulp.src("./js/*.js")
		.pipe(uglify())
		.pipe(gulp.dest("./dist/js"));
});

// 编译sass
gulp.task("compileSass",function(){
	sass("./scss/**/*.scss",{
		style: expanded
	}).pipe(gulp.dest("./dist/css"));
});

gulp.task("watch",function(){
	connect.server({
		livereload:true
	});
	gulp.watch("./*.html",["refreshHTML"]);
	gulp.watch("./*.html",["compileSass"]);
	gulp.watch("./*.html",["js"]);
});





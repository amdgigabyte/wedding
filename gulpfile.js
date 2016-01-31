var gulp = require('gulp');
var onehtml = require('gulp-onehtml');

gulp.task('default', function () {
    gulp.src('index.dev.html')
        .pipe(onehtml({
            perfix: 'perfix-',
            suffix: '-deploy',
            minify: true,
            base64: [  // 转换base64需要手工配置要转换的图片地址
                './assets/images/cover.jpg',
                './assets/images/map01.jpg'
            ]
        }))
        .pipe(gulp.dest('./'))
})

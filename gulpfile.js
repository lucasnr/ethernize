const { src, dest, series } = require('gulp'),
	clean = require('gulp-clean'),
	cssmin = require('gulp-cssmin'),
	usemin = require('gulp-usemin'),
	inlinesource = require('gulp-inline-source'),
	htmlmin = require('gulp-htmlmin');

function cleanDist() {
	return src('dist/', { read: false, allowEmpty: true }).pipe(clean());
}

function copyDist() {
	return src(['src/**/*', '!src/assets/css/**']).pipe(dest('dist/'));
}

function buildHtml() {
	return src('src/**/*.html')
		.pipe(
			usemin({
				css: [cssmin],
			})
		)
		.pipe(dest('dist/'));
}

function inlineJs() {
	return src('dist/**/*.html').pipe(inlinesource()).pipe(dest('dist/'));
}

function minifyHtml() {
	return src('dist/**/*.html')
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(dest('dist/'));
}

exports.default = series(cleanDist, copyDist, buildHtml, inlineJs, minifyHtml);

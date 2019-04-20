const { series } = require('gulp');
const browsersync = require('browser-sync');
var nodemon = require('gulp-nodemon');

function start_browser_sync(cb) {
    browsersync.init(null, {
        proxy: "http://localhost:5000",
        files: ["public/**/*.*"],
        browser: "google chrome",
        port: 7000,
    });
    cb();
}

function start_nodemon(cb) {
    var started = false;

    return nodemon({
        script: 'app.js'
    }).on('start', function () {
        // to avoid nodemon being started multiple times
        // thanks @matthisk
        if (!started) {
            cb();
            started = true; 
        } 
    });
    cb();
}

exports.default = series(start_browser_sync, start_nodemon);
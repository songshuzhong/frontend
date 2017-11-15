const gulp = require( 'gulp' );

const watch = require( './config/tasks/watch' );

const { dev, prod } = require( './config/tasks/build' );

gulp.task( 'watch', watch );

gulp.task( 'build:dev', dev );

gulp.task( 'build:prod', prod );
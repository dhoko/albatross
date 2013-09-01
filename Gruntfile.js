// This is the default port that livereload listens on;
var LIVERELOAD_PORT = 35729;
// lrSnippet is just a function.
// It's a piece of Connect middleware that injects
// a script into the static served html.
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });
// All the middleware necessary to serve static files.
var livereloadMiddleware = function (connect, options) {
  return [
    // Inject a livereloading script into static files.
    lrSnippet,
    // Serve static files.
    connect.static(options.base),
    // Make empty directories browsable.
    connect.directory(options.base)
  ];
};

module.exports = function(grunt) {

	grunt.initConfig({
		

		// banner in progress
		pkg: grunt.file.readJSON('package.json'),

		// The connect task is used to serve static files with a local server.
		connect: {
			dev: {
			   	options: {
			    	// The server's port, and the folder to serve from:
			    	// Ex: 'localhost:9000' would serve up 'app/index.html'
			    	port: 9000,
			    	base:'app',
			    	// Custom middleware for the HTTP server:
			    	// The injected JavaScript reloads the page.
			    	middleware: livereloadMiddleware
			    }
			}
		},
		// The watch task is used to run tasks in response to file changes
		watch: {
			dev: {
				// '**' is used to include all subdirectories
				// and subdirectories of subdirectories, and so on, recursively.
				files: ['app/**/*'],
				tasks:[],
				options: {
					livereload:LIVERELOAD_PORT
				}
			}
		}
		
	});
	
	
	grunt.loadNpmTasks('grunt-contrib-concat'); 
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');	
	
	grunt.registerTask('dev', ['connect:dev','watch:dev']);
};

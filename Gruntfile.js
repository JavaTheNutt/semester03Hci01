/*This is the Gruntfile. This sets up a configuration file for the JavaScript task runner, Grunt. Because Grunt is built on
* Nodejs, it is required that the tasks contained within be contained within a module.exports statement. This is because when Nodejs
* acceses a script, it only has access to what is contained in module.exports*/
module.exports = function (grunt) {
	/*Inital configuration*/
	grunt.initConfig({
		/*Tell grunt where the details of the project are held*/
		pkg: grunt.file.readJSON('package.json'),
		/*Concat task. This task will concatenate files together to ensure maximum performance as there will need to be far less XHR requests*/
		concat: {
			/*Here are some options for the concat task*/
			options: {
				/*This ensures that there will be two clear lines between each file after concatenation*/
				separator: '\n\n'
			},
			/*This will concatenate all of the scripts located within the array and place the result in the destination specified*/
			dist: {
				src: ['src/app.js', 'src/js/*.js', 'src/js/**/*.js'],
				dest: 'src/build/js/application.js'
			},
			/*This will do the same as above. This file will be for frameworks used*/
			deps: {
				src: [
					'bower_components/jquery/dist/jquery.js',
					'bower_components/bootstrap/dist/js/bootstrap.js',
					'bower_components/angular/angular.js',
					'bower_components/angular-ui-router/release/angular-ui-router.js',
					'bower_components/angular-breadcrumb/dist/angular-breadcrumb.js'
				],
				dest: 'src/build/js/application-deps.js'
			},
			/*This is identical to the task above, except that it uses the minifed versions of the files. This makes debugging more difficult,
			* so these files will only be used in the production version*/
			minDeps: {
				src: [
					'bower_components/jquery/dist/jquery.min.js',
					'bower_components/bootstrap/dist/js/bootstrap.min.js',
					'bower_components/angular/angular.min.js',
					'bower_components/angular-ui-router/release/angular-ui-router.min.js'
				],
				dest: 'src/build/js/application-deps.min.js'
			},
			/*This will take CSS files required by frameworks and place them in a singular file.*/
			cssDeps: {
				src: [
					'bower_components/bootstrap/dist/css/bootstrap.css',
					'bower_components/bootstrap/dist/css/bootstrap-theme.css',
					'bower_components/font-awesome/css/font-awesome.css'
				],
				dest: 'src/build/styles/application-style.css'
			},
			/*This is the same as above, but with the minified files*/
			cssMinDeps: {
				src: [
					'bower_components/bootstrap/dist/css/bootstrap.min.css',
					'bower_components/bootstrap/dist/css/bootstrap-theme.min.css'
				],
				dest: 'src/build/styles/application-style.min.css'
			}
		},
		/*This task will take the file located at the specified location and minify it. This will remove all whitespace and rename variables to
		* maximise performance*/
		uglify: {
			dist: {
				src: ['src/build/js/application.annotated.js'],
				dest: 'src/build/js/application.min.js'
			}
		},
		/*This will do the same task as above, but with the css files.*/
		cssmin: {
			dist: {
				src: ['src/styles/main.css'],
				dest: 'src/build/styles/main.min.css'
			}
		},
		/*This is used for annotating the angular code. Annotation is used when the files are minified. The reason for this is that when the files
		* are minifed, variable names will be converted to single letters for faster parsing. This can lead to issues because angular relies on
		* dependency injection to reduce the amount of coding overhead. Dependency injection means that the developer is not required to specify what
		* modules they will be using, instead they just use the variable name. An example of this is when every angular controller is defined, it
		* takes a parameter of $scope. This parameter refers to the scope of the controller. When the code is minified, this variable will be renamed
		* from $scope to 'a' and the code wont know what it refers to. This is why the code must be annotated which means that the function is placed
		* within an array and any dependencies are specified before the function. */
		ngAnnotate: {
			/*Options for the annotate task*/
			options: {
				/*This will ensure that single quotes are used in annotation. These are slightly more restricted than double quotes but are parsed faster*/
				singleQuotes: true
			},
			/*This will annotate the developer scripts. As as rule, code should be annotated when written, but  this is a good safety check*/
			dist: {
				files: [{
					expand: true,
					/*This is the source file to be annotated*/
					src: 'src/build/js/application.js',
					/*This is the extension that will go on the file*/
					ext: '.annotated.js',
					/*This is the location of the extension*/
					extDot: 'last'
				}]
			}
		},
		/*This task will watch the specified files and run the specified task whenever any of the files are changed. In this case it watches for any of the JavaScript scripts
		* and concatenates them into the application.js file*/
		watch: {
			files: ['src/js/**/*.js', 'src/app.js', 'src/js/*.js'],
			tasks: ['concat:dist']
		}
	});
	/*This tells grunt which tasks will be used*/
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	/*This creates a task that can be run from the command line. When I type "grunt build" into the command line, these tasks will be executed in this order*/
	grunt.registerTask('build', ['concat:deps', 'concat:dist', 'cssmin', 'concat:minDeps', 'concat:cssDeps', 'ngAnnotate', 'uglify:dist']);
};
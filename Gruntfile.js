module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat:{
            options:{
                separator: '\n\n'
            },
            dist:{
                src: ['src/app.js','src/js/*.js','src/js/**/*.js'],
                dest: 'src/build/js/application.js'
            },
            deps:{
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/jquery-ui/jquery-ui.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'bower_components/angular/angular.js',
                    'bower_components/angular-ui-router/release/angular-ui-router.js'
                ],
                dest: 'src/build/js/application-deps.js'
            },
			minDeps:{
				src: [
					'bower_components/jquery/dist/jquery.min.js',
					'bower_components/jquery-ui/jquery-ui.min.js',
					'bower_components/bootstrap/dist/js/bootstrap.min.js',
					'bower_components/angular/angular.min.js',
					'bower_components/angular-ui-router/release/angular-ui-router.min.js'
				],
				dest: 'src/build/js/application-deps.min.js'
			},
            cssDeps:{
                src: [
                    'bower_components/bootstrap/dist/css/bootstrap.css',
                    'bower_components/bootstrap/dist/css/bootstrap-theme.css'
                ],
                dest: 'src/build/styles/application-style.css'
            },
			cssMinDeps:{
				src: [
					'bower_components/bootstrap/dist/css/bootstrap.min.css',
					'bower_components/bootstrap/dist/css/bootstrap-theme.min.css'
				],
				dest: 'src/build/styles/application-style.min.css'
			}
        },
        uglify: {
			dist:{
				src:['src/build/js/application.annotated.js'],
				dest: 'src/build/js/application.min.js'
			}
		},
		cssmin:{
			dist:{
				src:['src/styles/main.css'],
				dest: 'src/build/styles/main.min.css'
			}/*,
			deps:{
				src:['src/styles/application-style.css'],
				dest:'src/styles/application-style.min.css'
			}*/
		},
		ngAnnotate:{
			options:{
				singleQuotes: true
			},
			dist:{
				files:[{
					expand: true,
					src: 'src/build/js/application.js',
					ext: '.annotated.js',
					extDot: 'last'
				}]

			}
		},
        watch:{
            files:['src/js/**/*.js', 'src/app.js', 'src/js/*.js'],
            tasks:['concat:dist']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('build', ['concat:deps', 'cssmin','concat:minDeps','concat:cssDeps', 'ngAnnotate', 'uglify:dist']);
};
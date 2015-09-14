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
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'bower_components/angular/angular.js',
                    'bower_components/angular-ui-router/release/angular-ui-router.js'
                ],
                dest: 'src/build/js/application-deps.js'
            },
            cssDeps:{
                src: [
                    'bower_components/bootstrap/dist/css/bootstrap.css',
                    'bower_components/bootstrap/dist/css/bootstrap-theme.css'
                ],
                dest: 'src/build/styles/application-style.css'
            }
        },
        watch:{
            files:['src/js/**/*.js', 'src/app.js', 'src/js/*.js'],
            tasks:['concat:dist']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['concat:deps', 'concat:cssDeps']);
};
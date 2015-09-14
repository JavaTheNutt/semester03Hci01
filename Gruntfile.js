module.exports = function(grunt){
    grunt.initConfig({
        pkg:{grunt.file.readJSON('package.json'),
        concat:{
            options:
                separator: '\n\n'
            },
            dist:{
                src: ['src/js/**/*.js'],
                dest: 'build/js/application.js'
            },
            deps:{
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js'
                ],
                dest: 'build/js/application_deps.js'
            }
        },
        watch:{
            files:['src/app.js', 'src/js/**/*.js'],
            tasks:[concat]
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

};
//==========================================================================================
// 修改版本号
function modifyVersion() {
    const package = require("./package.json");

    let version = package.version || "1.0.0";
    let arr = version.split(".");
    arr[arr.length - 1] = (Number.parseInt(arr[arr.length - 1]) + 1).toString();
    version = arr.join(".");
    package.version = version;

    const fs = require('fs');
    let data = JSON.stringify(package, null, 4);
    fs.writeFileSync("package.json", data, "utf8");
};
modifyVersion();
//==========================================================================================

const webpack = require('./webpack.config.js');

let webpack_min = Object.assign({}, webpack, {
    output: Object.assign({}, webpack.output, { filename: "index.min.js" }),
    mode: 'production',
})



module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    var config = {
        babel: {
            options: {
                sourceMap: true,
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            "chrome": "58",
                            "ie": "11"
                        }
                    }]
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'out',
                    src: ['**/*.js'],
                    dest: 'out-es5/'
                }]
            }
        },
        shell: {
            src: {
                command: 'tsc -p src',
                options: {
                    failOnError: false
                }
            }
        },
        webpack: {
            webpack,
            webpack_min
        },
        copy: {
            dist: {
                files: [
                    { expand: true, src: "dist/**", dest: "docs" }
                ]
            }
        }
    }

    grunt.initConfig(config);
    grunt.registerTask('build', ['shell', 'webpack']);
};
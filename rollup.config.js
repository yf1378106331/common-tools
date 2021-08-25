import {uglify} from 'rollup-plugin-uglify'
import livereload from 'rollup-plugin-livereload'

let plugins = [
    uglify(),
]

if(process.NODE_ENV === 'development'){
    plugins = [
        uglify(),
        livereload(),
    ]
}

export default {
    input: 'libs/index.js',
    output:[{
        file: 'dist/index.js',
        format: 'es',
    }],
    plugins: plugins
}
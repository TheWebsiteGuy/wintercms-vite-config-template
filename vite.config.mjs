import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    build: {
        outDir: 'assets/dist',
        assetsDir: '',
    },
    server: {
        host: '0.0.0.0',
        port: 5173,
        cors: true,
        hmr: {
            host: 'project.local', // Update with correct url for project
            protocol: 'ws',
            port: 5173,
        },

        watch: {
            usePolling: true
        }
    },
    plugins: [
        laravel({
            publicDirectory: 'assets/dist',
            input: [
                'assets/src/css/theme.css', // Update with correct css file
                'assets/src/js/theme.js', // Update with correct js file
            ],
            refresh: {
                paths: [
                    './**/*.htm',
                    './**/*.block',
                    'assets/src/**/*.css',
                    'assets/src/**/*.js',
                ]
            },
            middlewareMode: true,
        }),
    ],
    base: 'http://project.local', // Update with correct base url for project. Add subdirectory if required http://project.local/subdirectory
});

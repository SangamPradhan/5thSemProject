import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
    css: {
        postcss: './postcss.config.js',  // Ensure this is correctly set for PostCSS
    },

    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'],
});

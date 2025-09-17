import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
    root: './src',
    base: '/solargy/',
    server: {
        port: 3000,
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: './src/index.html',
                projectPage: './src/projectPage.html',
                news: './src/news.html',
                newsPage: './src/newsPage.html',
                documents: './src/documents.html',
                faq: './src/faq.html',
                calculator: './src/calculator.html',
                catalog: './src/catalog.html',
                productPage: './src/productPage.html',
                persons: './src/persons.html',
                about: './src/about.html',
                ruskeo: './src/ruskeo.html',
                contacts: './src/contacts.html',
                calculation: './src/calculation.html'
            },
        },
    },
    plugins: [
        injectHTML(),
    ],
});
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        './pages/**/*.{html,js}',
        './components/**/*.{html,js}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#0070f3',
                    DEFAULT: '#0052cc',
                    dark: '#003c9f',
                },
                secondary: {
                    light: '#ff9f43',
                    DEFAULT: '#f9c23c',
                    dark: '#e0a835',
                },
                success: {
                    light: '#4cd62b',
                    DEFAULT: '#45a900',
                    dark: '#348e41',
                },
                warning: {
                    light: '#ffcc00',
                    DEFAULT: '#ffc107',
                    dark: '#d3ac00',
                },
                danger: {
                    light: '#e91e63',
                    DEFAULT: '#f44336',
                    dark: '#ba000d',
                },
            },
            fontSize: {
                '10xl':'10rem'
            }
        },
    },
    plugins: [],
};

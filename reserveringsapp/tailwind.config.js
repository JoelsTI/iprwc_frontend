/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                 'cgi-red': "#E11937"
            }
        },
    },
    corePlugins: {
        container: false
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    "primary": "#000000",
                    "secondary": "#E11937",
                    "accent": "#1FB2A6",
                    "neutral": "#191D24",
                    "base-100": "#2A303C",
                    "info": "#3ABFF8",
                    "success": "#36D399",
                    "warning": "#FBBD23",
                    "error": "#F87272",
                },
            },
        ],
    },
    plugins: [
        require("daisyui"),
        function ({addComponents}) {
            addComponents({
                '.container': {
                    width: '100%',

                    '@screen sm': {
                        maxWidth: '640px',
                    },
                    '@screen md': {
                        maxWidth: '768px',
                    },
                    '@screen lg': {
                        maxWidth: '1024px',
                    },
                    '@screen xl': {
                        maxWidth: '1140px',
                    },
                }
            });
        }
    ],
};

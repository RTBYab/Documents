// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'ویدپروتکت',
    tagline: 'سامانه یکپارچه محافظت از دوره های آموزشی',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://docs.vidprotect.ir',
    baseUrl: '/',

    organizationName: 'VidProtect',
    projectName: 'VidProtect',

    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'fa',
        locales: ['fa'],
        localeConfigs: {
            fa: {
                label: 'فارسی',
                direction: 'rtl'
            }
        }
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js'
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'ویدپروتکت',
                logo: {
                    alt: 'Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'docs',
                        position: 'left',
                        label: 'آموزش',
                    }
                ],
            },
            footer: {
                style: 'light',
                links: [
                    {
                        title: 'مستندات',
                        items: [
                            {
                                label: 'آموزش',
                                to: '/docs',
                            },
                            {
                                label: 'API',
                                to: '/docs/category/توسعه-دهندگان',
                            },
                        ],
                    },
                    {
                        title: 'راه ارتباطی',
                        items: [
                            {
                                label: 'واتساپ',
                                href: 'https://api.whatsapp.com/send?phone=00989126836772&text=hi',
                            },
                            {
                                label: 'تلگرام',
                                href: 'https://t.me/S_Nazarian',
                            },
                            {
                                label: 'اینستاگرام',
                                href: 'https://instagram.com/vidprotect',
                            },
                        ],
                    }
                ],
                copyright: 'تمام حقوق مادی و معنوی این اثر متعلق به ویدپروتکت می باشد.'
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;

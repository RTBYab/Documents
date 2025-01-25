// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ویدپروتکت',
  tagline: 'امن‌ترین سرویس میزبانی ویدیو، ویدپروتکت',
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
        direction: 'rtl',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
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
      metadata: [
        {
          name: 'keywords',
          content: [
            'هاست ویدیو',
            'پلتفرم میزبانی ویدیو',
            'سرویس میزبانی ویدیو',
            'هاست استریم ویدیو',
            'سرویس VOD',
            'بهترین هاست ویدیو',
            'هاست امن ویدیو',
            'سرویس امن میزبانی ویدیو',
            'پلتفرم ویدیویی ',
            'پلتفرم ویدیو ',
            'مستندات ویدپروتکت',
            'مستندات وید پروتکت',
            'مستندات VidProtect',
            'VidProtect docs',
            'Vid Protect docs',
            'ویدپروتکت',
            'wordpress vidprotect',
            'vidprotect wordpress docs',
            'vidprotect wordpress',
            'ویدپروتکت وردپرس',
            'وید پروتکت وردپرس',
            'محافظت از دوره های آموزشی',
            'جلوگیری از دانلود ویدیوها',
            'ضد سرقت شدن ویدیوها',
            'جلوگیری از هک دوره‌های آموزشی',
            'ضد سرقت شدن دوره‌های آموزشی',
            'ضد هک شدن ویدیوها',
            'وید پروتکت',
            'وید پروتکت توسعه دهندگان',
            'ویدپروتکت توسعه دهندگان',
            'Vid Protect',
            'VidProtect',
            'VideoProtect',
            'امن ترین سرویس میزبانی و استریم ویدیو در ایران',
          ].join(', '),
        },
        { name: 'descriptions', content: 'سامانه محافظت از دوره های آموزشی' },
      ],
      navbar: {
        title: 'ویدپروتکت',
        logo: {
          href: '/docs/category/معرفی',
          alt: 'Logo',
          src: 'img/logo.svg',
        },
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'مستندات محصول',
            items: [
              {
                label: 'معرفی',
                to: '/docs/category/معرفی',
              },
              {
                label: 'راهنمای پنل',
                to: '/docs/category/راهنمای-پنل',
              },
            ],
          },
          {
            title: 'مستندات فنی',
            items: [
              {
                label: 'پلاگین وردپرس',
                to: '/docs/category/پلاگین-وردپرس',
              },
              {
                label: 'توسعه دهندگان',
                to: '/docs/category/توسعه-دهندگان',
              },
              {
                label: 'Swagger API',
                to: 'https://api.vidprotect.ir/docs',
              },
              {
                label: 'Redocly API',
                to: 'https://api.vidprotect.ir/redoc',
              },
            ],
          },
          {
            title: 'راه ارتباطی',
            items: [
              {
                label: 'تلگرام',
                href: 'https://t.me/vidprotect_ir',
              },
              {
                label: 'اینستاگرام',
                href: 'https://instagram.com/vidprotect.ir',
              },
              {
                label: 'لینکدین',
                href: 'https://linkedin.com/company/vidprotect',
              },
            ],
          },
        ],
        copyright:
          'تمام حقوق مادی و معنوی این اثر متعلق به <a target="_blank" href="https://vidprotect.ir"> ویدپروتکت </a> می باشد.',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      headTags: [
        // Declare a <link> preconnect tag
        {
          tagName: 'link',
          attributes: {
            rel: 'preconnect',
            href: 'https://docs.vidprotect.ir',
          },
        },
        // Declare some json-ld structured data
        {
          tagName: 'script',
          attributes: {
            type: 'application/ld+json',
          },
          innerHTML: JSON.stringify({
            '@context': 'https://docs.vidprotect.ir/docs/category/معرفی',
            '@type': 'Organization',
            name: 'مستندات ویدپروتکت',
            url: 'https://docs.vidprotect.ir',
            logo: 'https://docs.vidprotect.ir/img/favicon.ico',
          }),
        },
      ],
    }),
};

export default config;

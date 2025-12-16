import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '分析思考方法论',
  tagline: '思维的质量决定人生的质量',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://docs.thinking.ninthfeast.com',
  baseUrl: '/',

  organizationName: 'lhqs1314',
  projectName: 'thinking-docs',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs', // 文档路由
          sidebarPath: './sidebars.ts',
          editUrl: undefined, // 移除编辑链接
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/search/**'],
          filename: 'sitemap.xml',
        },
        blog: false, // 禁用博客功能
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',

    metadata: [
      {name: 'keywords', content: '思维方法论, 分析思考, 认知升级, 思维模型, 商业分析, 批判性思维, 元认知, 博弈论, 决策思维'},
      {name: 'author', content: 'lhqs'},
      {name: 'contact', content: 'lhqs1314@gmail.com'},
      {name: 'description', content: '系统梳理分析问题、深度思考的方法论体系。9大模块、42个主题,从思维框架到商业实战,全面提升思维质量。'},
      {property: 'og:type', content: 'website'},
      {property: 'og:site_name', content: '分析思考方法论'},
      {property: 'og:locale', content: 'zh_CN'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:creator', content: '@lhqs'},
    ],

    // 颜色模式配置
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    // 导航栏
    navbar: {
      title: '分析思考方法论',
      logo: {
        alt: '思维方法论 Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
      hideOnScroll: true,
      items: [
        {
          type: 'search',
          position: 'right',
        },
        {
          type: 'html',
          position: 'right',
          value: '<a href="https://github.com/lhqs1314/thinking-docs" class="navbar__link" target="_blank" rel="noopener noreferrer">⭐ GitHub</a>',
        },
      ],
    },

    // 页脚
    footer: {
      style: 'light',
      links: [
        {
          title: '核心模块',
          items: [
            {
              label: '视角维度篇',
              to: '/docs/视角维度篇/多元视角思维',
            },
            {
              label: '认知边界篇',
              to: '/docs/认知边界篇/认知限制觉察',
            },
            {
              label: '逻辑方法篇',
              to: '/docs/逻辑方法篇/因果关系分析',
            },
          ],
        },
        {
          title: '进阶内容',
          items: [
            {
              label: '博弈策略篇',
              to: '/docs/博弈策略篇/博弈思维',
            },
            {
              label: '元认知篇',
              to: '/docs/元认知篇/元认知与自我觉察',
            },
            {
              label: '商业实战篇',
              to: '/docs/商业实战篇/商业模式识别',
            },
          ],
        },
        {
          title: '关于',
          items: [
            {
              label: '框架总览',
              to: '/docs/框架总览',
            },
            {
              label: '使用指南',
              to: '/docs/框架总览#使用指南',
            },
            {
              html: '<a href="https://github.com/lhqs1314/thinking-docs" target="_blank" rel="noopener noreferrer">GitHub</a>',
            },
          ],
        },
      ],
      copyright: `思维的质量决定人生的质量<br/>© ${new Date().getFullYear()} <a href="https://github.com/lhqs1314" target="_blank" rel="noopener noreferrer">lhqs</a> · 联系方式: <a href="mailto:lhqs1314@gmail.com">lhqs1314@gmail.com</a><br/>构建于 <a href="https://docusaurus.io/" target="_blank" rel="noopener noreferrer">Docusaurus</a>`,
    },

    // 代码高亮
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['bash', 'json', 'typescript'],
    },

    // 目录配置
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },

    // 文档配置
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    // Algolia 搜索(可选)
    // algolia: {
    //   appId: 'YOUR_APP_ID',
    //   apiKey: 'YOUR_API_KEY',
    //   indexName: 'thinking-methodology',
    // },

  } satisfies Preset.ThemeConfig,

  // 插件
  plugins: [
    // 可以在这里添加更多插件
  ],

  // Markdown 配置
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],
};

export default config;

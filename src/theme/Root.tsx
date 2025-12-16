import React from 'react';
import {useLocation} from '@docusaurus/router';
import Head from '@docusaurus/Head';

export default function Root({children}) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  // 结构化数据 - 网站信息
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '分析思考方法论',
    description: '系统梳理分析问题、深度思考的方法论体系。9大模块、42个主题,从思维框架到商业实战,全面提升思维质量。',
    url: 'https://docs.thinking.ninthfeast.com',
    author: {
      '@type': 'Person',
      name: 'lhqs',
      email: 'lhqs1314@gmail.com',
      url: 'https://github.com/lhqs1314',
    },
    publisher: {
      '@type': 'Organization',
      name: '分析思考方法论',
      logo: {
        '@type': 'ImageObject',
        url: 'https://docs.thinking.ninthfeast.com/img/logo.svg',
      },
    },
    inLanguage: 'zh-CN',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://docs.thinking.ninthfeast.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  // 结构化数据 - 教育课程
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: '分析思考方法论',
    description: '系统梳理分析问题、深度思考的方法论体系',
    provider: {
      '@type': 'Organization',
      name: '分析思考方法论',
      sameAs: 'https://github.com/lhqs1314/thinking-docs',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'P42D',
    },
    about: [
      '思维方法论',
      '分析思考',
      '认知升级',
      '思维模型',
      '商业分析',
      '批判性思维',
      '元认知',
      '博弈论',
      '决策思维',
    ],
    teaches: [
      '多元视角思维',
      '认知边界觉察',
      '逻辑分析方法',
      '问题解决能力',
      '博弈策略思维',
      '商业实战应用',
    ],
  };

  // 结构化数据 - 面包屑导航
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '首页',
        item: 'https://docs.thinking.ninthfeast.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '文档',
        item: 'https://docs.thinking.ninthfeast.com/docs',
      },
    ],
  };

  return (
    <>
      <Head>
        {/* 结构化数据 */}
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        {isHome && (
          <>
            <script type="application/ld+json">
              {JSON.stringify(courseSchema)}
            </script>
            <script type="application/ld+json">
              {JSON.stringify(breadcrumbSchema)}
            </script>
          </>
        )}

        {/* 验证标签 */}
        <meta name="google-site-verification" content="" />

        {/* 百度站长验证 */}
        <meta name="baidu-site-verification" content="" />

        {/* 预连接到外部资源 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Canonical URL */}
        <link rel="canonical" href={`https://docs.thinking.ninthfeast.com${location.pathname}`} />

        {/* 备用语言版本 */}
        <link rel="alternate" hrefLang="zh-CN" href={`https://docs.thinking.ninthfeast.com${location.pathname}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://docs.thinking.ninthfeast.com${location.pathname}`} />
      </Head>
      {children}
    </>
  );
}

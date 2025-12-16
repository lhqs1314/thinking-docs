import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            分析思考方法论
          </Heading>
          <p className={styles.heroTagline}>
            思维的质量决定人生的质量
          </p>
          <p className={styles.heroDescription}>
            系统梳理分析问题、深度思考的方法论体系<br />
            9大模块 · 42个主题 · 从思维框架到商业实战
          </p>
          <div className={styles.heroButtons}>
            <Link className="button button--primary button--lg" to="/docs">
              开始阅读
            </Link>
            <Link className={clsx('button button--secondary button--lg')} to="/docs/框架总览">
              框架总览
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

interface ModuleItem {
  number: string;
  title: string;
  description: string;
  link: string;
}

const ModuleList: ModuleItem[] = [
  {
    number: '01',
    title: '视角维度篇',
    description: '多元视角、时间维度、系统层次、动态变化',
    link: '/docs/视角维度篇/多元视角思维'
  },
  {
    number: '02',
    title: '认知边界篇',
    description: '认知限制、头脑开放、跳出思维循环、不确定性应对',
    link: '/docs/认知边界篇/认知限制觉察'
  },
  {
    number: '03',
    title: '逻辑方法篇',
    description: '因果分析、抽象具象、规则例外、成本收益',
    link: '/docs/逻辑方法篇/因果关系分析'
  },
  {
    number: '04',
    title: '问题解决篇',
    description: '技术方法论、复杂系统、目标手段、具体分析',
    link: '/docs/问题解决篇/技术问题方法论'
  },
  {
    number: '05',
    title: '心法修炼篇',
    description: '课题分离、发散聚焦、细节全局、环境塑造',
    link: '/docs/心法修炼篇/课题分离'
  },
  {
    number: '06',
    title: '博弈策略篇',
    description: '博弈思维、价值交换、动机人性',
    link: '/docs/博弈策略篇/博弈思维'
  },
  {
    number: '07',
    title: '洞察发现篇',
    description: '认知偏误、批判思维、信息线索、逆向思维、历史规律',
    link: '/docs/洞察发现篇/人性弱点与认知偏误'
  },
  {
    number: '08',
    title: '元认知篇',
    description: '元认知觉察、情绪理性、概念定义、类比迁移、第一性原理',
    link: '/docs/元认知篇/元认知与自我觉察'
  },
  {
    number: '09',
    title: '商业实战篇',
    description: '商业模式、定价变现、杠杆规模化、护城河竞争',
    link: '/docs/商业实战篇/商业模式识别'
  }
];

function Module({number, title, description, link}: ModuleItem) {
  return (
    <Link to={link} className={styles.moduleCard}>
      <div className={styles.moduleNumber}>{number}</div>
      <div className={styles.moduleContent}>
        <Heading as="h3" className={styles.moduleTitle}>{title}</Heading>
        <p className={styles.moduleDescription}>{description}</p>
      </div>
      <div className={styles.moduleArrow}>→</div>
    </Link>
  );
}

function HomepageModules() {
  return (
    <section className={styles.modules}>
      <div className="container">
        <div className={styles.modulesHeader}>
          <Heading as="h2">知识框架</Heading>
          <p>从视角到方法,从心法到实战,系统提升思维能力</p>
        </div>
        <div className={styles.modulesList}>
          {ModuleList.map((props, idx) => (
            <Module key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageFooter() {
  return (
    <section className={styles.closing}>
      <div className="container">
        <div className={styles.closingContent}>
          <blockquote className={styles.quote}>
            「未经审视的人生不值得过。」
            <footer>—— 苏格拉底</footer>
          </blockquote>
          <p className={styles.closingText}>
            思考方法论不是为了让我们变得更「聪明」<br />
            而是让我们更接近真实,做出更好的选择
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="首页"
      description="分析思考方法论 - 思维的质量决定人生的质量">
      <HomepageHeader />
      <main>
        <HomepageModules />
        <HomepageFooter />
      </main>
    </Layout>
  );
}

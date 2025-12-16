/**
 * 自动化文档转换脚本
 * 将外部 markdown 文件转换为 Docusaurus 格式
 */

import * as fs from 'fs';
import * as path from 'path';

interface ConversionConfig {
  sourceDir: string;
  targetDir: string;
  sidebarPath?: string;
}

interface DocMeta {
  title: string;
  position?: number;
  description?: string;
  tags?: string[];
}

class DocConverter {
  private config: ConversionConfig;
  private sidebarItems: any[] = [];

  constructor(config: ConversionConfig) {
    this.config = config;
  }

  /**
   * 主转换函数
   */
  async convert(): Promise<void> {
    console.log('🚀 开始转换文档...');
    console.log(`📂 源目录: ${this.config.sourceDir}`);
    console.log(`📂 目标目录: ${this.config.targetDir}`);

    // 确保目标目录存在
    if (!fs.existsSync(this.config.targetDir)) {
      fs.mkdirSync(this.config.targetDir, { recursive: true });
    }

    // 转换文档
    await this.processDirectory(this.config.sourceDir, this.config.targetDir);

    // 生成侧边栏配置
    if (this.config.sidebarPath) {
      this.generateSidebar();
    }

    console.log('✅ 文档转换完成!');
  }

  /**
   * 处理目录
   */
  private async processDirectory(sourceDir: string, targetDir: string): Promise<void> {
    const entries = fs.readdirSync(sourceDir, { withFileTypes: true });

    for (const entry of entries) {
      const sourcePath = path.join(sourceDir, entry.name);

      if (entry.isDirectory()) {
        // 处理子目录
        const targetSubDir = path.join(targetDir, this.sanitizeDirName(entry.name));
        if (!fs.existsSync(targetSubDir)) {
          fs.mkdirSync(targetSubDir, { recursive: true });
        }

        await this.processDirectory(sourcePath, targetSubDir);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        // 处理 markdown 文件
        await this.processMarkdownFile(sourcePath, targetDir, entry.name);
      }
    }
  }

  /**
   * 处理单个 markdown 文件
   */
  private async processMarkdownFile(
    sourcePath: string,
    targetDir: string,
    fileName: string
  ): Promise<void> {
    console.log(`📄 处理: ${fileName}`);

    const content = fs.readFileSync(sourcePath, 'utf-8');
    const meta = this.extractMetadata(content, fileName);
    const processedContent = this.processContent(content, meta);

    // 生成 frontmatter
    const frontmatter = this.generateFrontmatter(meta);
    const finalContent = `${frontmatter}\n${processedContent}`;

    // 保存文件
    const targetPath = path.join(targetDir, this.sanitizeFileName(fileName));
    fs.writeFileSync(targetPath, finalContent, 'utf-8');

    console.log(`✓ 已保存: ${targetPath}`);
  }

  /**
   * 提取文档元数据
   */
  private extractMetadata(content: string, fileName: string): DocMeta {
    const lines = content.split('\n');
    let title = fileName.replace('.md', '');
    let description = '';

    // 尝试从第一个标题提取
    for (const line of lines) {
      if (line.startsWith('# ')) {
        title = line.replace('# ', '').trim();
        break;
      }
    }

    // 尝试从引用块提取描述
    for (const line of lines) {
      if (line.startsWith('> ') && !line.includes('—')) {
        description = line.replace('> ', '').trim();
        break;
      }
    }

    // 从文件名提取位置信息
    const match = fileName.match(/^(\d+)/);
    const position = match ? parseInt(match[1]) : undefined;

    // 自动提取标签
    const tags = this.extractTags(title, content);

    return { title, position, description, tags };
  }

  /**
   * 自动提取标签
   */
  private extractTags(title: string, content: string): string[] {
    const tags: string[] = [];

    // 根据标题关键词
    const tagMap: Record<string, string[]> = {
      '思维': ['思维方法'],
      '认知': ['认知升级'],
      '逻辑': ['逻辑分析'],
      '博弈': ['策略思考'],
      '商业': ['商业实战'],
      '元认知': ['元认知'],
      '问题': ['问题解决'],
      '洞察': ['洞察发现']
    };

    for (const [keyword, tagList] of Object.entries(tagMap)) {
      if (title.includes(keyword) || content.includes(keyword)) {
        tags.push(...tagList);
      }
    }

    return [...new Set(tags)]; // 去重
  }

  /**
   * 处理文档内容
   */
  private processContent(content: string, meta: DocMeta): string {
    let processed = content;

    // 移除第一个标题(因为会使用 frontmatter 的 title)
    processed = processed.replace(/^#\s+.+\n/, '');

    // 处理相对链接
    processed = this.processLinks(processed);

    // 处理图片链接
    processed = this.processImages(processed);

    return processed.trim();
  }

  /**
   * 处理文档内链接
   */
  private processLinks(content: string): string {
    // 将 ./path/file.md 转换为 Docusaurus 格式
    return content.replace(
      /\[([^\]]+)\]\(\.\/([^)]+)\.md\)/g,
      '[$1](./$2)'
    );
  }

  /**
   * 处理图片链接
   */
  private processImages(content: string): string {
    // 如果需要处理图片路径,可以在这里添加逻辑
    return content;
  }

  /**
   * 生成 frontmatter
   */
  private generateFrontmatter(meta: DocMeta): string {
    const parts: string[] = ['---'];

    parts.push(`title: "${meta.title}"`);

    if (meta.position !== undefined) {
      parts.push(`sidebar_position: ${meta.position}`);
    }

    if (meta.description) {
      parts.push(`description: "${meta.description}"`);
    }

    if (meta.tags && meta.tags.length > 0) {
      parts.push(`tags:`);
      meta.tags.forEach(tag => parts.push(`  - ${tag}`));
    }

    parts.push('---\n');

    return parts.join('\n');
  }

  /**
   * 生成侧边栏配置
   */
  private generateSidebar(): void {
    if (!this.config.sidebarPath) return;

    const sidebar = {
      type: 'autogenerated',
      dirName: '.'
    };

    const sidebarConfig = `module.exports = ${JSON.stringify(sidebar, null, 2)};`;
    fs.writeFileSync(this.config.sidebarPath, sidebarConfig, 'utf-8');

    console.log(`📋 侧边栏配置已生成: ${this.config.sidebarPath}`);
  }

  /**
   * 清理目录名
   */
  private sanitizeDirName(name: string): string {
    // 保留中文,只移除特殊字符
    return name.replace(/[<>:"|?*]/g, '');
  }

  /**
   * 清理文件名
   */
  private sanitizeFileName(name: string): string {
    // 保留中文,只移除特殊字符
    return name.replace(/[<>:"|?*]/g, '');
  }
}

/**
 * 命令行接口
 */
async function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.error('用法: pnpm tsx scripts/convert-docs.ts <源目录> <目标目录> [侧边栏配置路径]');
    process.exit(1);
  }

  const config: ConversionConfig = {
    sourceDir: args[0],
    targetDir: args[1],
    sidebarPath: args[2]
  };

  const converter = new DocConverter(config);
  await converter.convert();
}

// 导出供其他模块使用
export { DocConverter, ConversionConfig, DocMeta };

// 命令行执行
if (require.main === module) {
  main().catch(console.error);
}

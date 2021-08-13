// packages
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
// internals
import config from '~data/config';
import { getAllFilesMeta } from '~/services/mdx';
// types
import type { GetServerSideProps } from 'next';
import type {
  FrontMatterWithoutMeta,
  SnippetsFrontMatterWithoutMeta,
} from '~/services/mdx';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const snippets = await getAllFilesMeta<SnippetsFrontMatterWithoutMeta>(
    config.snippets.path
  );
  const articles = await getAllFilesMeta<FrontMatterWithoutMeta>();

  const articleFields: ISitemapField[] = articles.map((a) => ({
    loc: `${config.siteUrl}/${config.blog.path}/${a.slug}`,
    lastmod: new Date(a.updatedAt || a.publishedAt).toISOString(),
  }));

  const snippetFields: ISitemapField[] = snippets.map((s) => ({
    loc: `${config.siteUrl}/${config.snippets.path}/${s.slug}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, [...articleFields, ...snippetFields]);
};

export default function Sitemap() {}

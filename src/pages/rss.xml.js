import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
      title: "Hon Joo's blog",
      description: "My school and personal blog",
      site: context.site,
      items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
      customData: `<language>en-us</language>`,
  });
}
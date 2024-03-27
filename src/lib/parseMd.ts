import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkRehype from "remark-rehype";
import rehypeShiki from "@shikijs/rehype";
import remarkGFM from "remark-gfm";
import remarkWikiLink from "remark-wiki-link";
import remarkCallouts from "remark-callouts";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";

async function parseMarkdown(source: string) {
  const parsedString = await unified()
    // parsing markdown
    .use(remarkParse)
    .use(remarkCallouts)
    .use(remarkWikiLink, {
      pageResolver: (name: string) => [name.replace(/ /g, "_")],
      hrefTemplate: (permaLink: string) => `${permaLink}`,
    })
    .use(remarkGFM)
    .use(remarkMath)
    // markdown to html
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypeShiki, { theme: "github-light-default" })
    // serializing html
    .use(rehypeStringify)
    .process(source);
  return parsedString.toString();
}

export default parseMarkdown;

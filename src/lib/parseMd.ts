import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkRehype from "remark-rehype";
import rehypePrism from "rehype-prism";
import remarkGFM from "remark-gfm";
import remarkCallouts from "remark-callouts";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";

async function parseMarkdown(source: string) {
  const parsedString = await unified()
    // parsing markdown
    .use(remarkParse)
    .use(remarkCallouts)
    .use(remarkGFM)
    .use(remarkMath)
    // markdown to html
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypePrism)
    // serializing html
    .use(rehypeStringify)
    .process(source);
  return parsedString.toString();
}

export default parseMarkdown;

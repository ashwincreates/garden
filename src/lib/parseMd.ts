import { visit } from "unist-util-visit";
import { toString } from "mdast-util-to-string";
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

function remarkObsidianImg() {
  return (tree: any) => {
    visit(tree, "text", (node) => {
      const matches = node.value?.match(/!\[\[(.*\..*)\]\]/);
      if (!matches?.[0]) {
        return;
      }
      const imageSrc = matches[1];
      node.type = "image";
      node.url = `/images/${imageSrc}`;
      node.alt = imageSrc;
    });
  };
}

function remarkObsidianMark() {
  return (tree: any) => {
    visit(tree, "paragraph", (node) => {
      const paragraph = toString(node);
      const highlightRegex = /==([^=]+)==/g;

      if (paragraph.match(highlightRegex)) {
        const html = paragraph.replace(highlightRegex, (markdown, text) => {
          if (
            node.children.some(
              ({ value, type }: { value: string; type: string }) =>
                value === markdown && type === "inlineCode"
            )
          ) {
            return markdown;
          }

          return `<mark>${text}</mark>`;
        });

        if (html === paragraph) return node;

        delete node.children; // eslint-disable-line

        return Object.assign(node, { type: "html", value: `<p>${html}</p>` });
      }

      return node;
    });
  };
}

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
    .use(remarkObsidianImg)
    .use(remarkObsidianMark)
    .use(remarkMath)
    // markdown to html
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeKatex)
    .use(rehypeShiki, { theme: "github-light-default" })
    // serializing html
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(source);
  return parsedString.toString();
}

export default parseMarkdown;

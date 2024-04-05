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

function remarkObsidianTag() {
  return (tree: any) => {
    visit(tree, "text", (node) => {
      const paragraph = toString(node);
      // const tagRegex = /#(\w+|[^\u0000-\u007F]+)/g
      const tagRegex =
        /#([\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}\w]+)/gu;

      if (paragraph.match(tagRegex)) {
        const html = paragraph.replace(tagRegex, (markdown, text) => {
          return `<span class="tag">${text}</span>`;
        });

        if (html === paragraph) return node;

        delete node.children; // eslint-disable-line

        return Object.assign(node, { type: "html", value: `${html}` });
      }

      return node;
    });
  };
}

async function parseMarkdown(source: string, baseUrl: string = "") {
  const parsedString = await unified()
    // parsing markdown
    .use(remarkParse)
    .use(remarkCallouts)
    .use(remarkWikiLink, {
      pageResolver: (name: string) => [name.replace(/ /g, "_")],
      hrefTemplate: (permaLink: string) =>
        `${baseUrl !== "" ? baseUrl + "/" : ""}${permaLink}`,
      aliasDivider: "|",
    })
    .use(remarkObsidianImg)
    .use(remarkObsidianMark)
    .use(remarkObsidianTag)
    .use(remarkGFM)
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

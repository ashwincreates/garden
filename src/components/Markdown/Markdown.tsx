"use client";

function Markdown(props: { content: string }) {
  const { content } = props;
  return (
    <article
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: content }}
    ></article>
  );
}

export default Markdown;

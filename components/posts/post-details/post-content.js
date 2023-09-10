import PostHeader from "./post-header"
import classes from "./post-content.module.css"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import Image from "next/image"
import { Prism as SyntaxtHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism"

function PostContents({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`
  const contentOverwrite = {
    img: (imageProps) => (
      <Image
        src={`/images/posts/${post.slug}/${imageProps.src}`}
        width={300}
        height={300}
        alt={imageProps.alt}
      />
    ),
    code: (codeProps) => {
      console.log(codeProps)
      return (
        <SyntaxtHighlighter language="js" style={atomDark}>
          {codeProps.children[0]}
        </SyntaxtHighlighter>
      )
    },
  }
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={contentOverwrite}>
        {post.content}
      </ReactMarkdown>
    </article>
  )
}
export default PostContents

/* yaha pe add kiye hai code snippet that was really cool and awesome */

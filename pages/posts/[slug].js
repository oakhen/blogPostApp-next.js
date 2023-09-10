import PostContents from "@/components/posts/post-details/post-content"
import { getPostData, getFileNameArray } from "@/helper/post-util"
// my be slug ke name se hum array filter karenge

function SinglePost({ post }) {
  return <PostContents post={post} />
}
export default SinglePost

export async function getStaticPaths() {
  const filenNamesArray = getFileNameArray()
  const paths = filenNamesArray.map((post) => ({
    params: { slug: post.replace(/\.md$/, "") },
  }))
  return {
    paths,
    // we can also use paths:[] and the setting fallback
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const {
    params: { slug },
  } = context
  console.log(slug)
  const post = getPostData(slug)
  return {
    props: {
      post,
    },
    revalidate: 600,
  }
}

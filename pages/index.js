import FeaturedPost from "@/components/home-page/featured-posts"
import Hero from "@/components/home-page/hero"
import { getFeaturedPosts } from "@/helper/post-util"
import { Fragment } from "react"

function HomePages({ allPostsArry }) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={allPostsArry} />
    </Fragment>
  )
}
export default HomePages

export async function getStaticProps() {
  const allPostsArry = getFeaturedPosts()

  return {
    props: {
      allPostsArry,
    },
  }
}

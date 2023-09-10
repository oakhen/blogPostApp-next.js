import PostGrid from "../posts/post-grid"
import classes from "./featured-posts.module.css"

function FeaturedPost({ posts }) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  )
}
export default FeaturedPost

import classes from "./all-posts.module.css"
import PostGrid from "./post-grid"

function AllPosts({ posts }) {
  return (
    <section className={classes.posts}>
      <h1>All post</h1>
      <PostGrid posts={posts} />
    </section>
  )
}
export default AllPosts

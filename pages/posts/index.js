import AllPosts from "@/components/posts/all-posts-module"
import { getAllPosts } from "@/helper/post-util"

function AllPostsPage({ allposts }) {
  const DUMMY_DATA = [
    {
      title: "First Post",
      image: "getting-started-nextjs.png",
      excerpt: "This is the first post",
      date: "2022-01-01",
      slug: "getting-started-nextjs",
    },
    {
      title: "Second Post",
      image: "nextjs-file-based-routing.png",
      excerpt: "This is the second post",
      date: "2022-01-01",
      slug: "nextjs-file-based-routing",
    },
    {
      title: "First Post",
      image: "getting-started-nextjs.png",
      excerpt: "This is the first post",
      date: "2022-01-01",
      slug: "getting-started-nextjs",
    },
    {
      title: "Second Post",
      image: "nextjs-file-based-routing.png",
      excerpt: "This is the second post",
      date: "2022-01-01",
      slug: "nextjs-file-based-routing",
    },
  ]
  return <AllPosts posts={allposts} />
}
export default AllPostsPage

export async function getStaticProps() {
  const allposts = getAllPosts()
  return {
    props: {
      allposts,
    },
  }
}

/* i am doing a code marathon so let's see how fast i can build this 
website */

// import matter from "grey-matter"
import matter from "gray-matter"
import fs from "fs"
import path from "path"

const postDirectory = path.join(process.cwd(), "data", "posts")

/* hmko yehi function ko tweak kar ke aise dalna hai */
export const getPostData = (fileName) => {
  const slug = fileName.replace(/\.md$/, "")
  const filePath = path.join(postDirectory, `${slug}.md`)
  const postDataAsText = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(postDataAsText)
  return {
    ...data,
    content,
    slug,
  }
}

export const getFileNameArray = () => {
  return fs.readdirSync(postDirectory)
}

export const getAllPosts = () => {
  const fileNames = getFileNameArray()
  const postArray = fileNames.map((fileName) => getPostData(fileName))
  return postArray.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts()
  return allPosts.filter((post) => post.isFeatured)
}

// export const slugPost = (slug) => {
//   const allPosts = getAllPosts()
//   return allPosts.find((post) => post.slug === slug)
// }

/* sort method ke baare me hmko aaram se janna hai. */

import AllPosts from "@/components/AllPosts";
import { getAllPosts } from "@/lib/posts-util";

function PostListingPage(props) {
  const posts = props.posts;

  return <AllPosts posts={posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: { posts: allPosts },
  };
}

export default PostListingPage;

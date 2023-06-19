import classes from "@/styles/all-posts.module.css";
import PostGrid from "./PostGrid";

function AllPosts(props) {
  return (
    <section className={classes.posts}>
      <h1>All sections</h1>
      <PostGrid posts={props.posts} />
    </section>
  );
}

export default AllPosts;

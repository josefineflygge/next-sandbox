import classes from "@/styles/featured-posts.module.css";
import PostGrid from "./PostGrid";
import Link from "next/link";

function FeaturedPosts(props) {
  return (
    <section className={classes.featured}>
      <h2>Start here 👇 </h2>
      <PostGrid posts={props.posts} linkToMore={true} />
      <Link href="/posts">
        <h2>Learn more... </h2>
      </Link>
    </section>
  );
}

export default FeaturedPosts;

import FeaturedPosts from "@/components/FeaturedPosts";
import TopBanner from "@/components/TopBanner";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Next JS 101.</title>
        <meta name="description" content="testing around next.js" />
      </Head>
      <TopBanner />
      {props.posts && props.posts.length && (
        <FeaturedPosts posts={props.posts} />
      )}
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;

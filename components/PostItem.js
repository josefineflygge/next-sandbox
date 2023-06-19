import classes from "@/styles/post-item.module.css";
import Image from "next/image";
import Link from "next/link";

function PostItem(props) {
  const post = props.post;

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const linkPath = `/posts/${post.slug}`;
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image src={imagePath} alt={post.title} width={400} height={200} />
        </div>
        <div className={classes.content}>
          <h3>{post.title}</h3>
          <time>{formattedDate} </time>
          <p>{post.excerpt}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;

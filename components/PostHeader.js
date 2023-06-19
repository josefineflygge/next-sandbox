import classes from "@/styles/post-header.module.css";
import Image from "next/image";

function PostHeader(props) {
  const { title, image } = props;

  return (
    <header className={classes.header}>
      <Image
        className={classes.image}
        src={image}
        alt={title}
        width={800}
        height={500}
      />
      <h1>{title}</h1>
    </header>
  );
}

export default PostHeader;

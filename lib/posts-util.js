import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export const getPostFiles = () => {
  return fs.readdirSync(postsDirectory);
};

export const getPostData = (postIdentifier) => {
  const postSlug = postIdentifier.replace(/\.md$/, "");

  const filePath = path.join(postsDirectory, `${postSlug}.md`);

  const fileContent = fs.readFileSync(filePath, "utf-8");

  /* matter will return an object with teo properties, 
   a data key that holds the meta data, 
   and a content property with the markdown content as string */
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = getPostFiles();
  const posts = postFiles.map((file) => {
    return getPostData(file);
  });

  const sortedPosts = posts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
};

export const getFeaturedPosts = () =>
  getAllPosts().filter((post) => post.isFeatured);

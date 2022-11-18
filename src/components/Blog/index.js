import React, { useState } from "react";
import blogData from "../../assets/dataJson/blog.json";
import cx from "classnames";
import styles from "./Blog.module.scss";
import BlogCard from "./BlogCard";
const Blog = ({ theme }) => {
  const data = blogData.map((data) => data);
  const [reply, setReply] = useState(data[0].question);
  const blog = cx(styles.blog, {
    [styles.blog_dark]: theme === "dark",
  });

  return (
    <section className={blog}>
      <div className={styles.wrapper_acardion}>
        {blogData.map(({ answer, question },index) => (
          <BlogCard
            question={question}
            answer={answer}
            reply={reply}
            setReply={setReply}
            key={index}
            theme={theme}
          />
        ))}
        
      </div>
    </section>
  );
};

export default Blog;

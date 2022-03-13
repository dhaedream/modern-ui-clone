import React from "react";
import { Article } from "../../components";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt3__blog section__heading" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening. We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgURL={blog01} date="Feb 02 2022" />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgURL={blog02}
            date="Feb 02 2022"
            title="GPT-3 and Open AI is the future. Let us explore how it works!"
          />
          <Article
            imgURL={blog03}
            date="Feb 02 2022"
            title="GPT-3 and Open AI is the future. Let us explore how it works!"
          />
          <Article
            imgURL={blog04}
            date="Feb 02 2022"
            title="GPT-3 and Open AI is the future. Let us explore how it works!"
          />
          <Article
            imgURL={blog05}
            date="Feb 02 2022"
            title="GPT-3 and Open AI is the future. Let us explore how it works!"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;

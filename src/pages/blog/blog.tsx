import BlogPostComponent from "./components/blog-post-component/blog-post-component";

import ByodAndSecurity from "./components/blog-posts/byod-and-security";
import ManagingAppleAndroidAndBeyond from "./components/blog-posts/managing-apple-android-and-beyond";
import AiAndAutomation from "./components/blog-posts/ai-and-automation";
import TransparentFlatRate from "./components/blog-posts/transparent-flat-rate";

import "./blog.scss";

const blogPosts = [
  { blog: <TransparentFlatRate />, id: "transparent" },
  { blog: <AiAndAutomation />, id: "aiauto" },
  { blog: <ManagingAppleAndroidAndBeyond />, id: "managing" },
  { blog: <ByodAndSecurity />, id: "byod" },
];

function Blog() {
  return (
    <div className="blog-container">
      {blogPosts.map((post, i) => {
        const prevId = blogPosts[i - 1] ? blogPosts[i - 1].id : undefined;
        const nextId = blogPosts[i + 1] ? blogPosts[i + 1].id : undefined;
        return (
          <BlogPostComponent
            id={post.id}
            key={post.id}
            prevId={prevId}
            nextId={nextId}
          >
            {post.blog}
          </BlogPostComponent>
        );
      })}
    </div>
  );
}

export default Blog;

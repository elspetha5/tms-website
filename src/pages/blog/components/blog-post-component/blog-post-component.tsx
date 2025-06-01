import Button from "../../../../library/button/button";

import "./blog-post-component.scss";

interface BlogPostComponentProps {
  children: React.ReactNode;
  id: string;
  prevId?: string;
  nextId?: string;
}

function BlogPostComponent(props: BlogPostComponentProps) {
  const { children, id, prevId, nextId } = props;

  return (
    <div id={id} className="blog-post-container">
      <div className="blog-post-btn-container">
        {prevId && (
          <Button className="blog-post-btn" isTertiary to={`/blog/#${prevId}`}>
            prev
          </Button>
        )}
        {nextId && (
          <Button className="blog-post-btn" isTertiary to={`/blog/#${nextId}`}>
            next
          </Button>
        )}
      </div>
      {children}
    </div>
  );
}

export default BlogPostComponent;

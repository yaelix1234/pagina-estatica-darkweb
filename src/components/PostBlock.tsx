import type { ReactNode } from "react";

interface PostBlockProps {
  id?: string;
  numero: string;
  fecha: string;
  tag?: string;
  children: ReactNode;
}

function PostBlock({ id, numero, fecha, tag, children }: PostBlockProps) {
  return (
    <div className="post" id={id}>
      <div className="post-header">
        <span className="post-no">No.{numero}</span>
        <span className="post-meta">{fecha}</span>
        {tag && <span className="post-tag">{tag}</span>}
      </div>
      <div className="post-body">
        {children}
      </div>
    </div>
  );
}

export default PostBlock;
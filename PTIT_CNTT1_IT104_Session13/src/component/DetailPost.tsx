interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

const DetailPost = ({ post }: { post: Post }) => {
  return (
    <div style={{ borderBottom: "1px solid gray", padding: "8px 0", fontWeight: "bold" }}>
      <p>Id: {post.id}</p>
      <p>Title: {post.title}</p>
      <p>Content: {post.content}</p>
      <p>Author: {post.author}</p>
    </div>
  );
};

export default DetailPost;

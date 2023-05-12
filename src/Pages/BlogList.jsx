import { useNavigate } from 'react-router-dom';
import '../Components/Blog/BlogTile.css';
import BlogTile from '../Components/Blog/BlogTile';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import blogData from '../Constants/blogData';

const BlogList = () => {
  const navigate = useNavigate();

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <>
      <Navbar />
      {blogData.map((blog) => (
        <BlogTile
          key={blog.id}
          blog={blog}
          onClick={() => handleBlogClick(blog.id)}
        />
      ))}

      <Footer />
    </>
  );
};

export default BlogList;

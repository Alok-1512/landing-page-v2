import React from 'react';
import './BlogTile.css';
import { banner } from '../../assets';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';
import blogData from '../../Constants/blogData';

const BlogPost = () => {
  const { blogId } = useParams();
  const blog = blogData.find((blog) => blog.id === parseInt(blogId));

  if (!blog) {
    return <div>Blog post not found!</div>;
  }
  return (
    <>
      <Navbar />
      <div className='blog-post'>
        <div className='text-content w-[85%] md:w-[65%] mx-auto '>
          <h3 className='blog-heading  text-base md:text-4xl mb-6'>
            {blog.title}
          </h3>
          <img
            src={blog.featuredImg}
            alt=''
            className='main-img md:w-[85%] mx-auto'
          />
          <div
            className='blog-content '
            dangerouslySetInnerHTML={{ __html: blog.fullContent }}
          ></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;

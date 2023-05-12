// import React from 'react';
// import './BlogTile.css';
// import { banner } from '../../assets';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';
// import { useParams } from 'react-router-dom';
// import blogData from '../../Constants/blogData';

// const BlogPost = () => {
//   const { blogId } = useParams();
//   const blog = blogData.find((blog) => blog.id === parseInt(blogId));

//   if (!blog) {
//     return <div>Blog post not found!</div>;
//   }
//   return (
//     <>
//       <Navbar />
//       <div className='blog-post'>
//         <div className='text-content'>
//           <img
//             src={blog.featuredImg}
//             alt=''
//             className='main-img w-[65%] mx-auto'
//           />
//           <h3 className='blog-heading text-6xl'>{blog.title}</h3>
//           <p className='blog-content w-[65%] mx-auto'>{blog.fullContent}</p>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default BlogPost;

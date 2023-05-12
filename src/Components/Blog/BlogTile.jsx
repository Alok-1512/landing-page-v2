import './BlogTile.css';

import { HeroImg } from '../../assets';

const BlogTile = ({ blog, onClick }) => {
  const handleTileClick = () => {
    onClick(blog.id);
  };
  return (
    <div
      className='blog-tile flex flex-col md:flex-row items-center px-4 py-2 w-[80%] mx-auto shadow-lg my-5'
      onClick={handleTileClick}
    >
      <div className='featured-img'>
        <img src={HeroImg} alt='' className='w-[70%] mx-auto' />
      </div>
      <div className='text-container blog-title'>
        <h3>{blog.title}</h3>
        <p className='meta-description'>{blog.metaDescription}</p>
      </div>
    </div>
  );
};

export default BlogTile;

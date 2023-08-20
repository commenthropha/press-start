import getRecentPosts from '../(queries)/getRecentPosts';
import Card from './Card';

const Reviews = async () => {
  const posts: Post[] = await getRecentPosts();

  return (
    <div className='bg-[#ffeec4] text-[#171520]'>
      <h1 className='p-32 text-6xl text-center font-extrabold'>
        Take A Look At Some Of Our <span style ={{wordSpacing: "-20px"}} className='tracking-tighter font-inconsolata text-red-800'>Recent Reviews</span>
      </h1>
      <div className='flex flex-col xl:flex-row'>
        {posts?.map((post) => (
          <Card key={post.id} post = {post}/>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

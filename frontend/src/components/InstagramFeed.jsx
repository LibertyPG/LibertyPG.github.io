import React from 'react';
import { Instagram } from 'lucide-react';

const InstagramFeed = () => {
  const posts = [
    {
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80',
      caption: 'Comfortable living spaces at Liberty PG'
    },
    {
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80',
      caption: 'Common area for recreation and bonding'
    },
    {
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80',
      caption: 'Delicious and hygienic meals every day'
    },
    {
      image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80',
      caption: 'Well-furnished rooms with modern amenities'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Instagram className="text-pink-600" size={48} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Life at Liberty PG
          </h2>
          <p className="text-xl text-gray-600">
            Follow us on Instagram for daily updates and glimpses of hostel life!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 text-sm">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/libertypg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-md transition-all duration-300 hover:shadow-lg font-semibold"
          >
            <Instagram size={20} />
            <span>Follow @libertypg</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
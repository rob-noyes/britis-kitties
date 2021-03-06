import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../../client';

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
            asset->{
                _id,
                url
            }
        },
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-gray-300 min-h-screen p-12">
      <div className="container mx-auto flex flex-col">
        <h2 className="text-4xl flex justify-center mb-12">Blog</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPostsData &&
            allPostsData.map((post, index) => (
              <Link to={'/' + post.slug.current} key={post.slug.current}>
                <span
                  className="block h-64 relative round rounded shadow leading-snug bg-white"
                  key={index}
                >
                  <img
                    className="w-full h-full rounded-lg object-cover absolute"
                    src={post.mainImage.asset.url}
                    alt=""
                  />
                  <span
                    className="relative h-full flex justify-end items-end pr
                      -4 pb-4"
                  >
                    <h2
                      className="text-gray-800 text-lg font-bold px-3 py-4 bg-gray-300
                        text-black-200 bg-opacity-75 rounded mr-4"
                    >
                      {post.title}
                    </h2>
                  </span>
                </span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

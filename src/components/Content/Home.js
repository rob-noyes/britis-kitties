import sanityClient from '../../client';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [homeContent, setHomeContent] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "home"]{
        title,
        description,
    }`
      )
      .then((data) => setHomeContent(data[0]))

      .catch(console.error);
  }, []);

  if (homeContent == null) return <div>loading...</div>;

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="w-full flex justify-center items-center flex-col pt-12">
        <h2 className="text-4xl text-center">{homeContent.title}</h2>
        <p className="text-center m-10 md:max-w-2xl lg:max-w-2xl leading-loose">
          {homeContent.description}
        </p>
      </div>
    </div>
  );
};

export default Home;

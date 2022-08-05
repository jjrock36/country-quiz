import React from 'react';
import Header from './Header';
import Quiz from './Quiz';

const Content = () => {
  return (
    <section className="flex w-full h-full">
      <div className="flex flex-col justify-center m-auto">
        <Header />
        <Quiz />
      </div>
    </section>
  );
};

export default Content;

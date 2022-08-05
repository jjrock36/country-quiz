import React from 'react';
import Answers from './Answers';

const Quiz = () => {
  return (
    <div className="flex flex-col px-8 py-16 bg-white rounded-3xl">
      <h6 className="text-2xl font-bold text-sky-700 mb-8">
        Question goes here?
      </h6>
      <Answers />
    </div>
  );
};

export default Quiz;

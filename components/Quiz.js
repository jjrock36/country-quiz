import React from 'react';
import Answers from './Answers';
import { useGlobalContext } from '../context';

const Quiz = () => {
  const { capital, random } = useGlobalContext();
  const question = capital[random];

  return (
    <div className="flex flex-col px-8 py-16 bg-white rounded-3xl">
      <h6 className="text-2xl font-bold text-sky-700 mb-8">
        {question} is the capital of
      </h6>
      <Answers />
    </div>
  );
};

export default Quiz;

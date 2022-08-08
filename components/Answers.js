import React from 'react';
import { useGlobalContext } from '../context';

const Answers = () => {
  const { country, random, randomize, shuffle } = useGlobalContext();
  const answer = country[random];
  const multipleChoice = shuffle([
    country[randomize(country.length)],
    country[randomize(country.length)],
    country[randomize(country.length)],
    answer,
  ]);

  const handleClick = (item) => {
    if (item === answer) console.log('correct!');
    else console.log('incorrect');
  };

  return (
    <div className="flex flex-col">
      {multipleChoice.map((item, index) => {
        return (
          <div
            key={index}
            className="flex items-center mb-6 px-5 py-3 w-96 text-2xl font-medium text-indigo-500 rounded-xl border-2 border-indigo-500 transition-all hover:translate-y-1 hover:bg-yellow-500 hover:text-white hover:border-yellow-500 hover:cursor-pointer"
            onClick={() => handleClick(item)}
          >
            {index === 0 ? 'A' : index === 1 ? 'B' : index === 2 ? 'C' : 'D'}
            <div value={item} className="pl-12 text-lg font-medium">
              {item}
            </div>
          </div>
        );
      })}
      {/* <div className="flex items-center mb-6 px-5 py-3 w-96 text-2xl font-medium text-indigo-500 rounded-xl border-2 border-indigo-500 transition-all hover:translate-y-1 hover:bg-yellow-500 hover:text-white hover:border-yellow-500 hover:cursor-pointer">
        A<div className="pl-12 text-lg font-medium">Vietnam</div>
      </div>
      <div className="flex items-center mb-6 px-5 py-3 w-full text-2xl font-medium text-indigo-500 rounded-xl border-2 border-indigo-500 transition-all hover:translate-y-1 hover:bg-yellow-500 hover:text-white hover:border-yellow-500 hover:cursor-pointer">
        B<div className="pl-12 text-lg font-medium">Vietnam</div>
      </div>
      <div className="flex items-center mb-6 px-5 py-3 w-full text-2xl font-medium text-indigo-500 rounded-xl border-2 border-indigo-500 transition-all hover:translate-y-1 hover:bg-yellow-500 hover:text-white hover:border-yellow-500 hover:cursor-pointer">
        C<div className="pl-12 text-lg font-medium">Vietnam</div>
      </div>
      <div className="flex items-center mb-6 px-5 py-3 w-full text-2xl font-medium text-indigo-500 rounded-xl border-2 border-indigo-500 transition-all hover:translate-y-1 hover:bg-yellow-500 hover:text-white hover:border-yellow-500 hover:cursor-pointer">
        D<div className="pl-12 text-lg font-medium">Vietnam</div>
      </div> */}
    </div>
  );
};

export default Answers;

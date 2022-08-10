import React, { useState } from 'react';
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
  const [isCorrect, setIsCorrect] = useState();

  const handleClick = (e) => {
    const selection = e.target.lastChild.innerText;
    const style = e.target.classList;

    if (selection === answer) {
      style.add(
        'bg-green-500',
        'border-green-500',
        'text-white',
        'hover:bg-green-500',
        'hover:border-green-500'
      );
      style.remove;
    } else
      style.add(
        'bg-red-500',
        'border-red-500',
        'text-white',
        'hover:bg-red-500',
        'hover:border-red-500'
      );
  };

  return (
    <div className="flex flex-col">
      {/* {multipleChoice.map((item, index) => {
        return (
          <div
            key={index}
            className={`flex items-center mb-6 px-5 py-3 w-96 text-2xl font-medium text-indigo-500 rounded-xl border-2 border-indigo-500 transition-all hover:translate-y-1 hover:bg-yellow-500 hover:text-white hover:border-yellow-500 hover:cursor-pointer ${
              isCorrect === item && 'bg-green-500 border-green-500 text-white'
            }`}
            onClick={() => handleClick(item)}
          >
            {index === 0 ? 'A' : index === 1 ? 'B' : index === 2 ? 'C' : 'D'}
            <div value={item} className="pl-12 text-lg font-medium">
              {item}
            </div>
          </div>
        );
      })} */}
      <div
        className="flex items-center mb-6 px-5 py-3 w-96 text-2xl font-medium text-indigo-500 rounded-xl border-2 border-indigo-500 transition-all hover:translate-y-1 hover:bg-yellow-500 hover:text-white hover:border-yellow-500 hover:cursor-pointer"
        value={multipleChoice[0]}
        onClick={handleClick}
      >
        A<div className="pl-12 text-lg font-medium">{multipleChoice[0]}</div>
      </div>
      <div
        className="flex items-center mb-6 px-5 py-3 w-full text-2xl font-medium text-indigo-500 rounded-xl border-2 border-indigo-500 transition-all hover:translate-y-1 hover:bg-yellow-500 hover:text-white hover:border-yellow-500 hover:cursor-pointer"
        onClick={handleClick}
      >
        B<div className="pl-12 text-lg font-medium">{multipleChoice[1]}</div>
      </div>
      <div
        className="flex items-center mb-6 px-5 py-3 w-full text-2xl font-medium text-indigo-500 rounded-xl border-2 border-indigo-500 transition-all hover:translate-y-1 hover:bg-yellow-500 hover:text-white hover:border-yellow-500 hover:cursor-pointer"
        onClick={handleClick}
      >
        C<div className="pl-12 text-lg font-medium">{multipleChoice[2]}</div>
      </div>
      <div
        className="flex items-center mb-6 px-5 py-3 w-full text-2xl font-medium text-indigo-500 rounded-xl border-2 border-indigo-500 transition-all hover:translate-y-1 hover:bg-yellow-500 hover:text-white hover:border-yellow-500 hover:cursor-pointer"
        onClick={handleClick}
      >
        D<div className="pl-12 text-lg font-medium">{multipleChoice[3]}</div>
      </div>
    </div>
  );
};

export default Answers;

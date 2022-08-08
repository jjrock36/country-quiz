import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [country, setCountry] = useState([]);
  const [capital, setCapital] = useState([]);
  const [answers, setAnswers] = useState({});
  const [random, setRandom] = useState(null);

  const randomize = (range) => {
    return Math.floor(Math.random() * range);
  };
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = randomize(i + 1);
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      setError('');
      const { data } = await axios.get('https://restcountries.com/v3.1/all');

      if (data) {
        const countryData = data.map((item) => {
          const {
            name: { common: country },
          } = item;
          return country;
        });
        const capitalData = data.map((item) => {
          const { capital } = item;
          if (capital) return capital[0];
          else return 'None';
        });
        const answerKey = countryData.map((item, index) => {
          return [item, capitalData[index]];
        });

        setCountry(countryData);
        setCapital(capitalData);
        setAnswers(Object.fromEntries(answerKey));
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
    setRandom(randomize(country.length));
  }, [country.length]);

  return (
    <GlobalContext.Provider
      value={{
        loading,
        error,
        country,
        capital,
        answers,
        random,
        randomize,
        shuffle,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalContext, GlobalProvider };

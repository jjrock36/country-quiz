import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // const [capital, setCapital] = useState();
  const [country, setCountry] = useState({});

  const fetchData = async () => {
    try {
      setLoading(true);
      setError('');
      const { data } = await axios.get('https://restcountries.com/v3.1/all');

      if (data) {
        const countryData = data.map((item) => {
          const {
            name: { common: country },
            capital,
          } = item;

          const city = '';
          if (capital) {
            city = capital[0];
          }

          return { country, city };
        });
        // const capitalData = data.map((item) => {
        //   const { capital } = item;

        //   if (capital) return capital[0];
        //   else return 'None';
        // });

        setCountry(countryData);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <GlobalContext.Provider value={{ loading, error, country }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalContext, GlobalProvider };

import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => { // async keyword makes it possible to use await keyword
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          //term, // === term: term since the name parameter name and the variable name were the same by coincidence
          term: searchTerm,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses); //response.data is JSON data sent from yelp
    } catch (err){
      setErrorMessage('Something went wrong');
    }
  };

  // Call searchApi when component is first rendered (BAD)
  // infinite loop since a setter keeps on getting called
  // searchApi('pasta');
  // First argument: arrow function to be ran when the screen will be rendered
  // Second argument: none -> render everytime, [] -> render it once when the component 'loads', [value] -> render when value changes
  useEffect(() => {
    searchApi('pasta');
  }, [])

  return [searchApi, results, errorMessage];
};

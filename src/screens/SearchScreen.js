import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import yelp from '../api/yelp';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    })
  };

  return (
    //instead of using <View> with flex, you can use <> instead as a placeholder
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm} // (newTerm) => setTerm(newTerm)
        onTermSubmit={() => searchApi(term)}  // () => searchApi()
      />
      {errorMessage
        ? <Text>{errorMessage}</Text>
        : null
      }
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title="Low Budget"
        />
        <ResultsList
          results={filterResultsByPrice('$$')}
          title="Okay sure, spend a little more"
        />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title="You're a disappointment to Low Budget Man"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

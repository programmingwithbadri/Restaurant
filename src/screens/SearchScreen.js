import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, error] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => result.price === price);
    }

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {error ? <Text>{error}</Text> : null}
            <ResultsList title="Cost Effective" results={filterResultsByPrice('$')}/>
            <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')}/>
            <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')}/>
        </View>

    )
};

const styles = StyleSheet.create({
});

export default SearchScreen;
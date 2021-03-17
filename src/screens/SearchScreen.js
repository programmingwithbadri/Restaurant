import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import yelp from '../api/yelp';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    const searchApi = async () => {
        const response = await yelp.get('/search', {
            params: {
                term,
                limit: 50,
                location: 'san jose'
            }
        });
        setResults(response.data.businesses);
    }
    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi()}
            />
            <Text style={styles}>Search Screen</Text>
            <Text>We have found {results.length} results</Text>
        </View>

    )
};

const styles = StyleSheet.create({
});

export default SearchScreen;
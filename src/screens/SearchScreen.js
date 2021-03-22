import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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
        // Flex:1 style will constraint the view elements to the screen size(helphful to show contents in small screen device)
        // This will allow to show only the elements that can be shown in the screen size
        // The additional data/elements will be shown by scrolling
        // We can also use <> & </> instead of View to fix this 
        <View style={{ flex: 1 }}>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {error ? <Text>{error}</Text> : null}
            <ScrollView>
                <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} />
                <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} />
                <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')} />
            </ScrollView>
        </View>

    )
};

const styles = StyleSheet.create({
});

export default SearchScreen;
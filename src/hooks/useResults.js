import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    limit: 50,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        }
        catch (err) {
            setError('Something went wrong');
        }
    }

    useEffect(() => {
        searchApi('Pasta')
    }, [])

    return [searchApi, results, error];
}
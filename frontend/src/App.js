import React, { useEffect, useState } from 'react';
import { fetchMessage } from './services/api';

const App = () => {
    const [message, setMessage] = useState(''); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMessage = async () => {
            try {
                const result = await fetchMessage();
                setMessage(result.message);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getMessage();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Dev Resource Hub</h1>
            <p>{message}</p>
        </div>
    );
};

export default App;

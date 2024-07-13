import React from 'react'
import { useState, useEffect } from 'react';

function UseGithubUser( username ) {
    const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!username) return;
        setLoading(true);
        fetch(`https://api.github.com/users/${username}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                } 
                return res.json();
            })
            .then((json) => setUser(json))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [username]);
    return { user, error, loading };
}

export default UseGithubUser
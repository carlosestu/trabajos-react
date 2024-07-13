import React from 'react'
import { useState, useEffect, useCallback } from 'react';

function UseGithubUser( username ) {
    const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

    const fetchUser = useCallback(() => {
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
    useEffect(() => {
        fetchUser();
      }, [fetchUser]);
    return { user, error, loading, refresh:fetchUser };
}

export default UseGithubUser
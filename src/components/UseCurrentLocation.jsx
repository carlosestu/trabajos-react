import React from 'react'
import { useState, useEffect } from 'react';

function useCurrentLocation() {
    const [location, setLocation] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
    const getLocation = () => {
        if (!navigator.geolocation) {
            setError('didnt found your geolocation');
            return;
          }
          setLoading(true);
          navigator.geolocation.getCurrentPosition((position) => {
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
            setError(null);
            setLoading(false);
          });
    }
    return { location, getLocation, error, loading };
}

export default useCurrentLocation;
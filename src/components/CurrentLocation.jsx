import { useEffect, useState } from 'react';
import useCurrentLocation from './UseCurrentLocation';

export function CurrentLocation() {
    const {location, getLocation, error, loading} = useCurrentLocation();

	return (
	<div>
	<button onClick={getLocation}>pulse here to get ur location</button>
	<h1>this is your current location!</h1>
	{location && (
		<div>
			<p>Latitud: {location.latitude}</p>
			<p>Longitud: {location.longitude}</p>
		</div>
	)}
	</div>
	);
}
export default CurrentLocation;


import { useEffect, useState } from 'react';
import UseGithubUser from './UseGithubUser';

export function GithubUser({username}) {
    const { user, error, loading } = UseGithubUser(username);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!user) return <p>No user data</p>;
	return (
		<div>
			{user && (
				<>
					<img src={user.avatar_url} />
					<div>{user.login}</div>
					<div>{user.name}</div>
				</>
			)}
			{error && <div>{error.message}</div>}
			{loading && <div>Loading...</div>}
		</div>
	);
}
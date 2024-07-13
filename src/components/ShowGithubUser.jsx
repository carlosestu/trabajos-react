import React from 'react';
import { useParams } from 'react-router-dom';
import GithubUser from './GithubUser';

function ShowGithubUser() {
  const { userName } = useParams();
  return <GithubUser username={userName} />;
}

export default ShowGithubUser;
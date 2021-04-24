import { useEffect, useState } from 'react';

export default function ListItem({ user }) {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    fetch(user.url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserData(data);
        console.log(data);
      });
  }, []);
  return (
    <li>
      <div className='card' style={{ width: '18rem' }}>
        <img
          src={user.avatar_url}
          alt='profile-picture'
          className='card-img-top'
        />
        <div className='card-body'>
          <p className='card-title'>Name: {userData.name}</p>
          <p className='card-text'>Username: {user.login}</p>
          <p className='card-text'>Followers: {userData.followers}</p>
          <p className='card-text'>Twitter: {userData.twitter_username}</p>
          <a href={userData.html_url} className='btn btn-primary'>
            GitHub Profile
          </a>
        </div>
      </div>
    </li>
  );
}

import { useEffect, useState } from 'react';
import '../styles/styles.scss';

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
      });
  }, [user.url]);
  return (
    <div className='cards-container'>
      <div className='card-component'>
        <img src={user.avatar_url} alt='profile-avatar' className='card-img' />
        <div className='card-body'>
          <p>Name: {userData.name}</p>
          <p>Username: {user.login}</p>
          <p>Followers: {userData.followers}</p>
          <p>Twitter: {userData.twitter_username}</p>
          <a href={userData.html_url}>
            <button className='card-button'>GitHub Profile</button>
          </a>
        </div>
      </div>
    </div>
  );
}

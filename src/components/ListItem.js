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
      });
  }, [user.url]);
  return (
    <li className='list-unstyled album py-5 bg-light col-md-6'>
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='card'>
              <img
                src={user.avatar_url}
                alt='profile-avatar'
                className='card-img-top'
              />
              <div className='card-body'>
                <p className='card-title'>Name: {userData.name}</p>
                <p className='card-text'>Username: {user.login}</p>
                <p className='card-text'>Followers: {userData.followers}</p>
                <p className='card-text'>
                  Twitter: {userData.twitter_username}
                </p>
                <a href={userData.html_url} className='btn btn-primary'>
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

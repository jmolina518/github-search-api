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
        console.log(data);
        setUserData(data);
      });
  }, []);
  return (
    <li className='red'>
      {user.login}
      <img src={user.avatar_url} />
      {userData.followers}
    </li>
  );
}

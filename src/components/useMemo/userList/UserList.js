/*
 * @Author: wkylin.w
 * @Date: 2020-08-02 09:09:05
 * @Last Modified by: wkylin.w
 * @Last Modified time: 2020-08-02 09:46:32
 */
import React from 'react';
import List from './List.js';

const users = [
  { id: 'a', name: 'Robin' },
  { id: 'b', name: 'Dennis' }
];

function UserList() {
  console.log('Render: List');
  const [text, setText] = React.useState('');
  const [search, setSearch] = React.useState('');

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleSearch = () => {
    setSearch(text);
  };

  // const filteredUsers = users.filter((user) => {
  //     console.log('Filter function is running ...');

  //     return user.name.toLowerCase().includes(search.toLowerCase());
  // });
  const filteredUsers = React.useMemo(
    () =>
      users.filter((user) => {
        console.log('Filter function is running ...');

        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search]
  );

  return (

    <div>
      <input type='text' value={text} onChange={handleText} />
      <button type='button' onClick={handleSearch}>
        Search
      </button>
      <List list={filteredUsers} />
    </div>
  );
}

export default React.memo(UserList);

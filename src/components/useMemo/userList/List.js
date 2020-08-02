/*
 * @Author: wkylin.w
 * @Date: 2020-08-02 08:09:03
 * @Last Modified by: wkylin.w
 * @Last Modified time: 2020-08-02 09:00:26
 */

import React from 'react';
import ListItem from './Item';

function List({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default List;

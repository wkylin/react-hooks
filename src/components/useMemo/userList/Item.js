import React from 'react';

function ListItem({ item }) {
  console.log('Render: ListItem');
  return <li>{item.name}</li>;
}

export default React.memo(ListItem);

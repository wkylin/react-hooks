import React from 'react';

export const RequireContext= () => {
  const assetsPath= '../../assets/images/';
  const cats = [
    'frontend.png'
  ];
  return(
    <div>
      {
        cats.map((item) => <div><img src={require(`../../assets/images/${item}`)} /></div>)
      }
    </div>
  )
}

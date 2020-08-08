import React from 'react';

export const RequireContext= () => {
  // const assetsPath= '../../assets/images/';
  const cats = [
    'frontend.png'
  ];
  return(
    <div>
      {
        // eslint-disable-next-line no-undef
        cats.map((item, index) => <div key={index}><img src={require(`../../assets/images/${item}`)} /></div>)
      }
    </div>
  )
}

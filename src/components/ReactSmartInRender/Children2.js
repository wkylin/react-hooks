import React, { useState, memo } from 'react';

// const Child2 = () => {
//   console.log('Child2 rendered');
//   return (
//     <div style={{ border: '1px solid red', padding: '30px' }}>
//       Child
//     </div>
//   );
// };

const Child2 = memo(
  () => {
    console.log('Child2 rendered');
    return (
      <div style={{ border: '1px solid red', padding: '30px' }}>
        Child
      </div>
    );
  }
);


export default Child2;

import React, { memo } from 'react';

// const Child2 = () => {
//   console.log('Child2 rendered');
//   return (
//     <div style={{ border: '1px solid red', padding: '30px' }}>
//       Child
//     </div>
//   );
// };

const Child2Fn = () => {
  console.log('Child2 rendered');
  return <div style={{ border: '1px solid red', padding: '30px' }}>Child</div>;
};
const Child2 = memo(Child2Fn);


export default Child2;

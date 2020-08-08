import React, { memo } from 'react';

// const Child1 = () => {
//   console.log('Child1 rendered');
//   return (
//     <div style={{ border: '1px solid red', padding: '30px' }}>
//       Child1
//     </div>
//   );
// };

const Child = () => {
  console.log('Child1 rendered');
  return <div style={{ border: '1px solid red', padding: '30px' }}>Child1</div>;
};
const Child1 = memo(Child);

export default Child1;

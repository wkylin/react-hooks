import React, { useContext } from 'react';
// import ComponentF from './ComponentF';
import { UserContext, ChannelContext } from '../../App';

// export class ComponentE extends Component {
//     render() {
//         return (
//             <div>
//                 {/* <ComponentF/> */}
//             </div>
//         )
//     }
// }

const ComponentE = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {user} - {channel}
    </div>
  );
};
export default ComponentE;

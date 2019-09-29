import React, { Component, useContext } from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from '../../App'

// export class ComponentE extends Component {
//     render() {
//         return (
//             <div>
//                 {/* <ComponentF/> */}
//             </div>
//         )
//     }
// }

function ComponentE() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
            {user} - { channel }
        </div>
    )
}
export default ComponentE

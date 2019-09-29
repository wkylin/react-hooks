import React, { Component } from 'react'
import { UserContext, ChannelContext } from '../../App'


export class ComponentF extends Component {
    render() {
        return (
            <div>
                <UserContext.Consumer>
                    {
                        user => {
                            return (
                                <ChannelContext.Consumer>
                                    {
                                        channel => {
                                            return (
                                                <div>
                                                    User context value {user}, Channel context value { channel}
                                                </div>
                                            )
                                        }
                                    }
                                </ChannelContext.Consumer>
                                
                            )
                        }
                    }
                </UserContext.Consumer>
            </div>
        )
    }
}

export default ComponentF

import React, { Component } from 'react'
import axios from 'axios'
import './skeleton.css'
import Skeleton from 'react-loading-skeleton'

export default class LoadingSkeleton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      loading: true,
    }
  }
  async getUsersData() {
    /* With Timeout */
    return await setTimeout(async () => {
      const res = await axios.get('http://jsonplaceholder.typicode.com/users')
      const users = res.data.slice(0, 4)
      this.setState({ users, loading: false })
    }, 5000)

  }
  componentDidMount() {
    this.getUsersData()
  }
  render() {
    const { users } = this.state

    if (this.state.loading) {
      return (
        <>
          <div className="usercard">
            <div className="cards">
              <Skeleton height={20} count={4} /> <Skeleton height={100} />
            </div>
          </div>
          <div className="usercard">
            <div className="cards">
              <Skeleton count={4} /> <Skeleton height={100} />
            </div>
          </div>
          <div className="usercard">
            <div className="cards">
              <Skeleton count={4} /> <Skeleton height={100} />
            </div>
          </div>
          <div className="usercard">
            <div className="cards">
              <Skeleton count={4} /> <Skeleton height={100} />
            </div>
          </div>
        </>
      )
    }
    return (
      <div className="usercard">
        {users.map((u) => (
          <div key={u.id} className="cards">
            <h3>{u.name}</h3>
            <p>{u.username}</p>
            <p>
              <a href={`mailto:${u.email}`}>{u.email}</a>
            </p>
            <p>
              <a href={u.website}>{u.website}</a>
            </p>
            <p>
              react loading skeleton.
            </p>
          </div>
        ))}
      </div>
    )
  }
}

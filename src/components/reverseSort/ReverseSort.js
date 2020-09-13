import React, { useState, Fragment } from 'react'

export const ReverseSort = () => {
  const [sortAToZ, setSortAToZ] = useState(true)

  const sortAlphabetically = (a, b) => {
    if (a.name < b.name) {
      return -1
    }

    if (a.name > b.name) {
      return 1
    }

    return 0
  }

  const classmates = [
    { name: 'Trevor', id: 'a1b2c3' },
    { name: 'John', id: 'b2c3d4' },
    { name: 'Adam', id: 'c3d4e5' },
    { name: 'Tyler', id: 'd4e5f6' },
    { name: 'Matt', id: 'e5f6g7' },
    { name: 'Tyler', id: 'f6g7h8' },
  ]
  const sortedClassmates = sortAToZ
    ? [...classmates].sort(sortAlphabetically)
    : [...classmates].sort(sortAlphabetically).reverse()

  const reverseSortOrder = () => setSortAToZ((sortAToZ) => !sortAToZ)

  return (
    <Fragment>
      <button onClick={reverseSortOrder}>Reverse Sort Order</button>
      <ul>
        {sortedClassmates.map((classmate) => (
          <li key={classmate.id}>
            <label>
              <input type="checkbox" /> {classmate.name}
            </label>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

import React from 'react';

export default class MenuItem extends React.Component {

  render() {
    return (
      <ul className="menu">
        <li>Dashboard</li>
        <li>Scores</li>
        <li>Survivor List</li>
        <li>League Roster</li>
      </ul>
    )
  }
}

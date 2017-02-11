import React from 'react';

export default class MenuItem extends React.Component {

  render() {
    return (
      <ul className="menu">
        <li><a href="/">Dashboard</a></li>
        <li><a href="/scores">Scores</a></li>
        <li><a href="">Survivor List</a></li>
        <li><a href="">League Roster</a></li>
      </ul>
    )
  }
}

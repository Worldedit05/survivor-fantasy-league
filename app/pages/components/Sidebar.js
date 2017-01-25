import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

export default class Sidebar extends React.Component {

  render() {
    return (
      <aside className="column is-2 aside hero is-fullheight is-hidden-mobile">
        <div>
          <div className="main">
            <div className="title">
              Main
            </div>
          </div>
        </div>
      </aside>
    )
  }
}

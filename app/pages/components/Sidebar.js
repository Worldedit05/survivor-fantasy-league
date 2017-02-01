import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Columns, Column, Container } from 're-bulma';

export default class Sidebar extends React.Component {

  render() {
    return (
      <aside className="aside hero is-fullheight is-hidden-mobile">
        <Container>
          <div className="main">
            <div className="title">
              Main
            </div>
          </div>
        </Container>
      </aside>
    )
  }
}

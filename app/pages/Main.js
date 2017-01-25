import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Sidebar from './components/Sidebar';
import { Container } from 're-bulma';


injectTapEventPlugin();

export default class Main extends React.Component {

  render() {
    return (
      <div>
        <Sidebar></Sidebar>
      </div>
    )
  }
}

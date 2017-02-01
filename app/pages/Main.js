import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Sidebar from './components/Sidebar';
import AdminPanel from './components/AdminPanel';
import { Container, Columns, Column, Hero } from 're-bulma';

injectTapEventPlugin();

export default class Main extends React.Component {

  render() {
    return (
      <Columns isGapless>
        <Column size="is2">
          <Sidebar></Sidebar>
        </Column>
        <Column size="is10">
          <AdminPanel></AdminPanel>
        </Column>
      </Columns>
    )
  }
}

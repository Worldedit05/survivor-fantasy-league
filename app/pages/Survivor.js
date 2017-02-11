import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Sidebar from './dashboard/components/Sidebar';
import SurvivorPanel from './survivor_list/components/SurvivorPanel';
import { Container, Columns, Column, Hero } from 're-bulma';

export default class Survivor extends React.Component {

  render() {
    return (
      <Columns isGapless>
        <Column size="is2">
          <Sidebar></Sidebar>
        </Column>
        <Column size="is10">
          <SurvivorPanel>
            {this.props.children}
          </SurvivorPanel>
        </Column>
      </Columns>
    )
  }
}

import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Sidebar from './dashboard/components/Sidebar';
import ScorePanel from './scores/components/ScorePanel';
import { Container, Columns, Column, Hero } from 're-bulma';

export default class Scores extends React.Component {

  render() {
    return (
      <Columns isGapless>
        <Column size="is2">
          <Sidebar></Sidebar>
        </Column>
        <Column size="is10">
          <ScorePanel>
            {this.props.children}
          </ScorePanel>
        </Column>
      </Columns>
    )
  }
}

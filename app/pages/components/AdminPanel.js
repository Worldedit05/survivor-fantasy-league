import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Columns, Column, Container, Hero, HeroBody } from 're-bulma';

import TableRender from './Table.js';

export default class AdminPanel extends React.Component {

  render () {
    return (
        <Container>
          <Columns isMultiline>
            <Column size="is12">
              <Container hasTextCentered>
                <Hero size="isSmall" className="style">
                  <HeroBody>
                    <h1 className="title">
                      Survivor Fantasy League
                    </h1>
                  </HeroBody>
                </Hero>
              </Container>
              <Column size="is10" offset="isOffset1">
                <TableRender></TableRender>
              </Column>
            </Column>
          </Columns>
        </Container>

    )
  }
}
